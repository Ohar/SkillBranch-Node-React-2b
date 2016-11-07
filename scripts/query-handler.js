'use strict';

const parseName    = require('./parse-name'),
      getShortname = require('./get-shortname');

function queryHandler (req, res) {
  try {
    const query  = req.query,
          name   = parseName(query.fullname),
          result = getShortname(name);

    return res.set('Access-Control-Allow-Origin', '*')
              .send(String(result));

  } catch (e) {
    return res.set('Access-Control-Allow-Origin', '*')
              .sendStatus(400);
  }
}

module.exports = queryHandler;