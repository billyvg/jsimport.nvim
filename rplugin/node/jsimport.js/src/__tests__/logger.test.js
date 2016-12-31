jest.mock('../util', () => jest.genMockFromModule('../util'));
jest.mock('raven');

import logger from '../logger';
import Raven from 'raven';
import {
  echomsg,
  warn,
  error,
} from '../util';

global.debug = jest.fn();

describe('logger', function() {
  beforeEach(function() {
    jest.resetAllMocks();
  });

  it('can log a string', function() {
    logger.log('test');
    expect(
      global.debug
    ).toHaveBeenCalledWith('test');
  });

  [['log', 'info'], ['debug', 'debug'], ['error', 'error'], ['warn', 'warning']]
    .forEach(([funcName, level]) => {
      describe(`${funcName}`, function() {
        it('sets correct breadcrumb', function() {
          logger[funcName]('test');

          expect(
            Raven.captureBreadcrumb
          ).toHaveBeenCalledWith({
            level,
            category: 'logging',
            message: 'test',
            data: {},
          });
        });

        it('does not call `Raven.captureException` when there is no `err` property', function() {
          logger[funcName]('test');
          expect(
            Raven.captureException
          ).not.toHaveBeenCalled();
        });

        it('captures an exception in Raven when `err` property exists', function() {
          const err = new Error('An error');
          logger[funcName]('error', { err });
          expect(
            Raven.captureException
          ).toHaveBeenCalledWith(err);
        });

        it('does not call nvim echo helper if nvim api is not available', function() {
          logger[funcName]('test');

          expect(
            echomsg
          ).not.toHaveBeenCalled();
          expect(
            warn
          ).not.toHaveBeenCalled();
          expect(
            error
          ).not.toHaveBeenCalled();
        });

        it('does not call nvim echo helper if nvim api is not available', function() {
          logger[funcName]('test', { nvim: {} });

          if (level === 'error' || level === 'warning') {
            expect(
              echomsg
            ).not.toHaveBeenCalled();
          } else {
            expect(
              echomsg
            ).toHaveBeenCalled();
          }

          if (level !== 'warning') {
            expect(
              warn
            ).not.toHaveBeenCalled();
          } else {
            expect(
              warn
            ).toHaveBeenCalled();
          }

          if (level !== 'error') {
            expect(
              error
            ).not.toHaveBeenCalled();
          } else {
            expect(
              error
            ).toHaveBeenCalled();
          }
        });
      });
    });

});
