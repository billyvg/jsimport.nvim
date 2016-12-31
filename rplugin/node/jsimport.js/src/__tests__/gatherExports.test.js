import path from 'path';
import gatherExports from '../gatherExports';

describe('gatherExports', function() {
  const GATHER_DIR = path.resolve(__dirname, '../../test_resources/gather_test/');
  // We can't save the entire file path because snapshots will fail in other envs
  const REL = '../../../../..';
  const rootPath = path.resolve(__dirname, REL);
  const getRootFiles = (files) => files.map((file) => file.replace(rootPath, ''));

  it('gathers ".js" and ".jsx" files by default', async function() {
    const files = await gatherExports(GATHER_DIR);

    expect(
      getRootFiles(files)
    ).toMatchSnapshot();
  });

  it('only gathers from ".js" files', async function() {
    const files = await gatherExports(GATHER_DIR, { pattern: '\.js$' });

    expect(
      getRootFiles(files)
    ).toMatchSnapshot();
  });

  it('ignores "child/react" full file path pattern', async function() {
    const files = await gatherExports(GATHER_DIR, { ignore: ['child/react']});

    expect(
      getRootFiles(files)
    ).toMatchSnapshot();
  });

  it('ignores ".jsx" files', async function() {
    const files = await gatherExports(GATHER_DIR, { ignore: ['\.jsx$']});

    expect(
      getRootFiles(files)
    ).toMatchSnapshot();
  });

  it('ignores all files', async function() {
    const files = await gatherExports(GATHER_DIR, { ignore: ['.*']});

    expect(
      getRootFiles(files)
    ).toMatchSnapshot();
  });
});
