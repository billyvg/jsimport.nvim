import Raven from 'raven';

import {
  echomsg,
  warn,
  error,
} from './util';

const breadcrumbContext = ({ message, category, level, ...options }) => {
  Raven.captureBreadcrumb({
    message,
    category: category || 'logging',
    level,
    data: options,
  });
};

const _log = (level, message, { nvim, err, ...options } = {}) => {
  debug(`${message}${err ? `: ${err}`: ''}`);

  breadcrumbContext({
    ...options,
    message,
    level,
  });

  if (nvim) {
    if (level === 'error') {
      error(nvim, `${message}: ${err}`);
    } else if (level === 'warning') {
      warn(nvim, message);
    } else {
      echomsg(nvim, message);
    }
  }

  if (err) {
    Raven.captureException(err);
  }
};

const logger = {
  bench(_message, { benchmark, nvim, ...options }) {
    const message = `${_message} [${benchmark}s]`;
    breadcrumbContext({
      ...options,
      message,
      category: 'perf',
      level: 'debug',
    });

    echomsg(nvim, message);
  },

  log: _log.bind(this, 'info'),
  debug: _log.bind(this, 'debug'),
  error: _log.bind(this, 'error'),
  warn: _log.bind(this, 'warning'),
};

export default logger;
export const captureError = Raven.captureException;
