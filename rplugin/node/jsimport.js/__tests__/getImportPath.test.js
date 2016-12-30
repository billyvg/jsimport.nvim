import getImportPath from '../src/getImportPath';

describe('getImportPath', function() {
  it('two files in the same directory', function() {
    const from = '/src/foo.js';
    const to = '/src/bar.js';

    expect(
      getImportPath(from, to)
    ).toEqual(
      './bar'
    );
  });

  it('same file', function() {
    const from = '/src/foo.js';
    const to = '/src/foo.js';

    expect(
      getImportPath(from, to)
    ).toEqual(
      './foo'
    );

  });

  it('target file is in a child directory', function() {
    const from = '/src/foo.js';
    const to = '/src/sub/dir/bar.js';

    expect(
      getImportPath(from, to)
    ).toEqual(
      './sub/dir/bar'
    );
  });

  it('target file is in a parent directory', function() {
    const from = '/src/foo/foo.js';
    const to = '/src/bar/bar.js';

    expect(
      getImportPath(from, to)
    ).toEqual(
      '../bar/bar'
    );
  });

  it('target file is in a different parent directory', function() {
    const from = '/src/foo/foo.js';
    const to = '/lib/bar/bar.js';

    expect(
      getImportPath(from, to)
    ).toEqual(
      '../../lib/bar/bar'
    );
  });
});
