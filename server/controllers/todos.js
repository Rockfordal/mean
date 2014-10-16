var Todo = require('mongoose').model('Todo');

exports.getTodos = function (req, res) {
  Todo.find({}).exec(function (err, collection) {
    res.send(collection);
  });
};
