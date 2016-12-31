import path from 'path';
import regeneratorRuntime from 'regenerator-runtime'; // eslint-disable-line
import { parse as babylonParse } from 'babylon';
import traverse from 'babel-traverse';
import fs from 'mz/fs';
import logger from './logger';

const _addMapping = (obj, { name, file, type }) => {
  obj[name] = {
    name,
    file,
    type,
  };
};

const BabylonVisitor = {
  ExportDefaultDeclaration(p/*, state*/) {
    if (p.node && p.node.declaration) {
      let name;
      if (p.node.declaration.id) {
        name = p.node.declaration.id.name;
      } else {
        name = path.parse(this.file).name;
      }

      _addMapping(this.map, {
        name,
        file: this.file,
        type: 'default',
      });
    }
  },

  ExportNamedDeclaration(p) {
    if (p.node && p.node.declaration) {
      let name;
      const type = 'named';
      const file = this.file;

      if (p.node.declaration.id) {
        name = p.node.declaration.id.name;
        _addMapping(this.map, {
          name,
          file,
          type,
        });
      }

      if (p.node.declaration.declarations) {
        p.node.declaration.declarations.forEach((d) => {
          _addMapping(this.map, {
            type,
            file,
            name: d.id.name,
          });
        });
      }

    }
  },
};

const babylonPlugins = [
  'asyncFunctions',
  'asyncGenerators',
  'classConstructorCall',
  'classProperties',
  'decorators',
  'doExpressions',
  'exponentiationOperator',
  'exportExtensions',
  'flow',
  'functionSent',
  'functionBind',
  'jsx',
  'objectRestSpread',
  'trailingFunctionCommas',
];

export default async (files: Array<string>, nvim) => {
  const promises: Array<Promise<[string, string]>> = files.map((file) => fs.readFile(file, 'utf8').then((source) => [file, source]));
  logger.debug(`Parsing...${promises.length}`);
  return Promise.all(promises).then(([...sources]) => {
    const map = {};
    sources.forEach(([file, source]) => {
      try {
        const ast = babylonParse(source, {
          sourceType: 'module',
          plugins: babylonPlugins,
        });
        traverse(ast, BabylonVisitor, null, { file, map });
      } catch (err) {
        logger.error('Syntax error while parsing AST', { err, nvim });
      }
    });
    logger.debug('Done traverse');
    return map;
  }, (err) => logger.error('Caught promise error reading files', { nvim, err }))
  .catch((err) => debug('Error in parseExports', { nvim, err }));
};
