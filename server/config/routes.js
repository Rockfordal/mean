var auth = require('./auth'),
  users = require('../controllers/users'),
  mongoose = require('mongoose'),
  User = mongoose.model('User'),
  expressJwt = require('express-jwt');

module.exports = function(app, config) {

  function getTodos(_, res) {
    var collection = [
      {name: 'Diska', text: 'mja'},
      {name: 'Piska', text: ''},
      {name: 'aiska', text: ''},
      {name: 'biska', text: ''},
      {name: 'ciska', text: ''},
      {name: 'kiska', text: ''},
      {name: 'Fiska', text: ''}
    ];
    res.send(collection);
  }

  // We are going to protect /api routes with JWT
  app.use('/api', expressJwt({secret: config.secret}).unless({path: ['/api/todo']}));

  app.get('/api/todos', getTodos);
  app.get('/api/users', auth.requiresRole('admin'), users.getUsers);
  app.post('/api/users', users.createUser);
  app.put('/api/users', users.updateUser);

  app.get('/partials/*', function(req, res) {
    res.render('../../public/app/' + req.params);
  });

  app.post('/login', function(req, res, next) {
    auth.authenticate(req, res, next, config);
  });

  app.post('/logout', function (req, res) {
    req.logout();
    res.end();
  });

  app.get('*', function(req, res) {
    res.render('index.ejs');
  });
};
