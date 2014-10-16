var mongoose = require('mongoose');

  var todoSchema = mongoose.Schema({
    name: {type:String, required:'{PATH} is required'},
    text: {type:String, required:'{PATH} is required'}
  });

//  userSchema.methods = {
//  };

var Todo = mongoose.model('Todo', todoSchema);

function createDefaultTodos() {
  Todo.find({}).exec(function (err, collection) {
    if (collection.length === 0) {
      var diska = { name: 'Diska', text: 'Nu ska vi diska lite'};
      var tvatt = { name: 'Tvätta', text: 'Mycket tvätt blir det'};
      Todo.create(diska, function (err) {
        if (err) { console.log('fel: ' + err); }
      });
      Todo.create(tvatt, function (err) {
        if (err) { console.log('fel: ' + err); }
      });
    }
  });
}

exports.createDefaultTodos = createDefaultTodos;