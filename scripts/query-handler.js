'use strict';

const parseName    = require('./parse-name'),
      getShortname = require('./get-shortname'),
      log4js         = require('log4js'),
      logger         = log4js.getLogger('queryHandler');

function queryHandler (req, res) {
  try {
    const query  = req.query,
          name   = parseName(query.fullname),
          result = getShortname(name);

    return res.send(String(result));
  } catch (e) {
    logger.error('Fail', e);

    switch (e.message) {
      case 'Invalid fullname':
        res.send(e.message);
        break;
      default:
        res.sendStatus(500);
        break;
    }
  }
}

module.exports = queryHandler;
