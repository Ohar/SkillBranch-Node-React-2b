'use strict';

const log4js = require('log4js'),
      logger = log4js.getLogger('getInitial');

function getInitial (str) {
  if (str && str.length) {
    const initial = String(str)[0].toUpperCase();
    return `${initial}.`;
  } else {
    logger.error('Fail');
    logger.debug('str', str);
    return new Error('Wrong string');
  }
}

module.exports = getInitial;
