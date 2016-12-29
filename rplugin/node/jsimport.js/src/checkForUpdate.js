import updateNotifier from 'update-notifier';
import pkg from '../package.json';
import {
  UPDATE_INTERVAL,
} from './constants';
import {
  echo,
  echomsg,
} from './util';

export default function checkForUpdates(nvim) {
  const notifier = updateNotifier({
    pkg,
    updateCheckInterval: UPDATE_INTERVAL,
  });

  if (notifier && notifier.update) {
    if (nvim) {
      const updateMsg = `Update available ${notifier.update.current} → ${notifier.update.latest}`;
      echomsg(nvim, updateMsg);
      echo(nvim, [
        'echon \' Update available \'',
        'echohl Comment',
        `echon '${notifier.update.current}'`,
        'echohl None',
        'echon \' → \'',
        'echohl Keyword',
        `echon '${notifier.update.latest}'`,
        'echohl None',
      ]);
    }

    return notifier.update;
  }

  return null;
}
