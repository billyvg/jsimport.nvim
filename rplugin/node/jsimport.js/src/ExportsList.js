import regeneratorRuntime from 'regenerator-runtime'; // eslint-disable-line
import fs from 'mz/fs';

import {
  CACHE_FILENAME,
} from './constants';
import cacheExports from './cacheExports';

class ExportList {
  loaded: false;
  map: {};

  setApi(nvim) {
    this.nvim = nvim;
  }

  async update() {
    debug(this.nvim);
    this.map = await cacheExports(this.nvim);
    this.loaded = true;
    return this.map;
  }

  async loadFromFile() {
    const results = await fs.readFile(CACHE_FILENAME, 'utf8');
    this.map = JSON.parse(results);
    this.loaded = true;
    return this.map;
  }

  async getWord(word: string) {
    if (!this.loaded) {
      await this.update();
    }

    return this.map[word];
  }
}

export default new ExportList();

