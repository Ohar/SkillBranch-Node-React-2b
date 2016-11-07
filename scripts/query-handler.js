'use strict';

const parseName    = require('./parse-name'),
      getShortname = require('./get-shortname');

function queryHandler (req, res) {
  try {
    const query  = req.query,
          name   = parseName(query.fullname),
          result = getShortname(name);

    return res.send(String(result));
  } catch (e) {
    switch (e.message) {
      case 'Invalid fullname':
        res.status(400)
           .send(e.message);
        break;
      default:
        console.error('Fail', e, e.message);
        res.sendStatus(500);
        break;
    }
  }
}

module.exports = queryHandler;