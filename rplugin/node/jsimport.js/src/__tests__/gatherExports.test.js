import gatherExports from '../gatherExports';
import path from 'path';

const GATHER_DIR = path.resolve(__dirname, '../../test_resources/gather_test/');
describe('gatherExports', function() {
  it('can gather exports with default settings', async function() {
    const files = await gatherExports(GATHER_DIR);
    expect(files).toMatchSnapshot();
  });
});
