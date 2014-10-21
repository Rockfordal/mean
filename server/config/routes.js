var auth = require('./auth'),
  users = require('../controllers/users'),
  todos = require('../controllers/todos'),
  mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Todo = mongoose.model('Todo'),
  expressJwt = require('express-jwt');

module.exports = function(app, config) {

  // Secure /api routes with JWT
  app.use('/api', expressJwt({secret: config.secret}).unless({path: ['/api/todo']}));

  app.get('/apiusers', expressJwt({secret: config.secret}));
  app.put('/apiusers', expressJwt({secret: config.secret}));
  app.delete('/apiusers', expressJwt({secret: config.secret}));

  app.get('/api/todos', todos.getTodos);

  //Users
  app.get('/apiusers', auth.requiresRole('admin'), users.getUsers);
  app.put('/apiusers', users.updateUser);
  app.post('/apiusers', users.createUser);
  app.post('/reguser', users.createUser);
  app.delete('/apiusers/:userId', users.destroy);
  app.param('userId', users.user);

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
