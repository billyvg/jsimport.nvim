import gatherExports from '../gatherExports';
import path from 'path';

const GATHER_DIR = path.resolve(__dirname, '../../test_resources/gather_test/');
describe('gatherExports', function() {
  it('can gather exports with default settings', async function() {
    const files = await gatherExports(GATHER_DIR);

    // We can't save the entire file path because snapshots will fail in other envs
    expect(
      files.map((file) => file.replace(path.resolve(__dirname, '../../../../..'), ''))
    ).toMatchSnapshot();
  });
});
