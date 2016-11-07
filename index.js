'use strict';

const express      = require('express'),
      cors         = require('cors'),
      queryHandler = require('./scripts/query-handler'),
      queryLogger  = require('./scripts/query-logger');

const SERVER = express(),
      API    = express.Router(),
      PORT   = process.env.PORT || 8082;

API.use(queryLogger);
API.get('/', queryHandler);

SERVER.use(cors());
SERVER.use('/', API);
SERVER.listen(PORT);