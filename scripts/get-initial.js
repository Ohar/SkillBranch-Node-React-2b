'use strict';

function getInitial (str) {
  if (str && str.length) {
    const initial = String(str)[0].toUpperCase();
    return `${initial}.`;
  } else {
    return new Error('Wrong string');
  }
}

module.exports = getInitial;
