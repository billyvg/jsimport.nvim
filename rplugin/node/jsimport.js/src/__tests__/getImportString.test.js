import getImportString from '../getImportString';

describe('getImportString', function() {
  const context = {
    type: '',
  };
  const nvim = {};

  it('defaut import string', function() {
    expect(
      getImportString(nvim, {
        word: 'foo',
        importPath: './foo',
        context: {
          ...context,
          type: 'default',
        },
      })
    ).toEqual(
      ['import foo from \'./foo\';']
    );
  });

  it('named import string', function() {
    expect(
      getImportString(nvim, {
        word: 'foo',
        importPath: './foo',
        context: {
          ...context,
          type: 'named',
        },
      })
    ).toEqual(
      ['import { foo } from \'./foo\';']
    );
  });
});
