'use strict';

const compact    = require('lodash/compact'),
      getInitial = require('./get-initial');

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
    throw e;
  }
}

module.exports = getShortname;
