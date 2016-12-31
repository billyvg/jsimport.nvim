import crypto from 'crypto';
import regeneratorRuntime from 'regenerator-runtime'; // eslint-disable-line
import Raven from 'raven';

import { version } from '../package.json';
import {
  RAVEN_DSN,
} from './constants';

const initializeTracking = async (nvim) => {
  const shouldTrackErrors = await nvim.getVar('jsimport#reporting');

  if (shouldTrackErrors) {
    const id = crypto.randomBytes(16).toString('hex');
    Raven.config(RAVEN_DSN, {
      captureUnhandledRejections: true,
      release: version,
      shouldSendCallback: () => shouldTrackErrors, // support for promises? or async?
      autoBreadcrumbs: {
        console: true,
      },
      dataCallback: (data) => {
        return {
          ...data,
          server_name: null,
          user: {
            ip_address: null,
            server_name: null,
            id,
          },
        };
      }
    }).install();
  }
};

export default initializeTracking;
