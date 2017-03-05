/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var wordsRouter = express.Router();

  wordsRouter.get('/', function(req, res) {
    res.send({
      "data": {
        "type": "words",
        "id": 1,
        "attributes": {
          "spell": "example",
          "pronunciation": "ɪɡ'zæmpəl",
          "frequency": 4.67
        },
        "relationships": {
          "definitions": {
            "data": [{
              "type": "definitions",
              "id": "1"
            }, {
              "type": "definitions",
              "id": "2"
            }]
          }
        }
      },
      "included": [{
        "type": "definitions",
        "id": "1",
        "attributes": {
          "description": "a representative form or pattern",
          "part-of-speech": "noun",
          "synonyms": ["model"],
          "examples": [
            "I profited from his example."
          ]
        }
      }, {
        "type": "definitions",
        "id": "2",
        "attributes": {
          "description": "something to be imitated",
          "part-of-speech": "noun",
          "synonyms": ["exemplar", "good example", "model"]
        }
      }]
    });
  });

  wordsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  wordsRouter.get('/:id', function(req, res) {
    res.send({
      'words': {
        id: req.params.id
      }
    });
  });

  wordsRouter.put('/:id', function(req, res) {
    res.send({
      'words': {
        id: req.params.id
      }
    });
  });

  wordsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/words', require('body-parser').json());
  app.use('/api/words', wordsRouter);
};
