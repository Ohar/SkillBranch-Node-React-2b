'use strict';

const compact    = require('lodash/compact'),
      getInitial = require('./get-initial'),
      log4js     = require('log4js'),
      logger     = log4js.getLogger('getShortname');

function getShortname (name) {
  try {
    const firstnamePart  = name.firstname ? getInitial(name.firstname) : '',
          patronymicPart = name.patronymic ? getInitial(name.patronymic) : '';

    const shortname = compact(
      [
        name.lastname,
        firstnamePart,
        patronymicPart,
      ]
    )
      .join(' ');


    return shortname;
  } catch (e) {
    logger.error('Fail', e);
    logger.debug('name', name);
    throw e;
  }
}

module.exports = getShortname;
