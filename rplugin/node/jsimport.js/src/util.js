import {
  APP_NAME,
} from './constants';

export function warn(nvim, message) {
  nvim.callFunction('jsimport#util#print_warning', [message]);
}

export function error(nvim, message) {
  nvim.callFunction('jsimport#util#print_error', [message]);
}

export function echo(nvim, message) {
  nvim.command(`echo '[${APP_NAME}] ${message}'`);
}

export function echomsg(nvim, message) {
  let combinedMessage = message;
  if (typeof message !== 'string' && message.length) {
    combinedMessage = message.join('|');
  }
  nvim.command(`echomsg'[${APP_NAME}] ${combinedMessage}'`);
}

export function echoboth(nvim, message, options = {}) {
  const specialMessage = options.special;
  echo(nvim, specialMessage || message);
  echomsg(nvim, message);
}

