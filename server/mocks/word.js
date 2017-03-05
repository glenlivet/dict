/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var wordRouter = express.Router();

  wordRouter.get('/', function(req, res) {
    res.send({
      'word': []
    });
  });

  wordRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  wordRouter.get('/:id', function(req, res) {
    res.send({
      'word': {
        id: req.params.id
      }
    });
  });

  wordRouter.put('/:id', function(req, res) {
    res.send({
      'word': {
        id: req.params.id
      }
    });
  });

  wordRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/word', require('body-parser').json());
  app.use('/api/word', wordRouter);
};
