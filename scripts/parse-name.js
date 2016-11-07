'use strict';

const last           = require('lodash/last'),
      upperCaseFirst = require('upper-case-first'),
      log4js         = require('log4js'),
      logger         = log4js.getLogger('parseName');

function parseName (rawName) {
  const words      = rawName.split(' '),
        nameRegexp = /^[^-_\/\d]+$/;

  if (
    !nameRegexp.test(rawName)
    || words.length === 0
    || words.length > 3
  ) {
    logger.error('Fail');
    logger.debug('rawName', rawName);
    throw new Error('Invalid fullname');
  } else {
    const firstname  = words.length > 1
            ? upperCaseFirst(words[0])
            : null,
          patronymic = words.length === 3
            ? upperCaseFirst(words[1])
            : null,
          lastname   = upperCaseFirst(last(words));

    return {firstname, patronymic, lastname};
  }
}

module.exports = parseName;
