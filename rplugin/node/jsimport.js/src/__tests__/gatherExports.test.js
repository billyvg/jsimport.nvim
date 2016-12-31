import gatherExports from '../gatherExports';
import path from 'path';

const GATHER_DIR = path.resolve(__dirname, '../../test_resources/gather_test/');
const REL = '../../../../..';

describe('gatherExports', function() {
  it('gathers ".js" and ".jsx" files by default', async function() {
    const files = await gatherExports(GATHER_DIR);

    // We can't save the entire file path because snapshots will fail in other envs
    expect(
      files.map((file) => file.replace(path.resolve(__dirname, REL), ''))
    ).toMatchSnapshot();
  });

  it('only gathers from ".js" files', async function() {
    const files = await gatherExports(GATHER_DIR, { pattern: '\.js$' });

    // We can't save the entire file path because snapshots will fail in other envs
    expect(
      files.map((file) => file.replace(path.resolve(__dirname, REL), ''))
    ).toMatchSnapshot();
  });

  it('ignores "child/react" full file path pattern', async function() {
    const files = await gatherExports(GATHER_DIR, { ignore: ['child/react']});

    // We can't save the entire file path because snapshots will fail in other envs
    expect(
      files.map((file) => file.replace(path.resolve(__dirname, REL), ''))
    ).toMatchSnapshot();
  });

  it('ignores ".jsx" files', async function() {
    const files = await gatherExports(GATHER_DIR, { ignore: ['\.jsx$']});

    // We can't save the entire file path because snapshots will fail in other envs
    expect(
      files.map((file) => file.replace(path.resolve(__dirname, REL), ''))
    ).toMatchSnapshot();
  });
});
