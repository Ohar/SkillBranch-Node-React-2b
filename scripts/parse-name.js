'use strict';

const last           = require('lodash/last'),
      upperCaseFirst = require('upper-case-first');

function parseName (rawName) {
  const words      = rawName.split(' '),
        nameRegexp = /^[A-Za-z ]+$/;

  if (
    !nameRegexp.test(rawName)
    || words.length > 3
    || words.length > 3
  ) {
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
