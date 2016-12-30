// @flow

type Params = {
  word: string,
  importPath: string,
  context: any,
};

export default function getImportString(nvim: any, { /*buffer, */word, importPath, context }: Params) {
  if (context.type === 'named') {
    return [`import { ${word} } from '${importPath}';`];
  }

  // default import
  return [`import ${word} from '${importPath}';`];
}
