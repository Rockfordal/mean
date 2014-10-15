var passport = require('passport');
var jwt = require('jsonwebtoken');

exports.authenticate = function(req, res, next, config) {
  req.body.username = req.body.username.toLowerCase();
  var auth = passport.authenticate('local', function (err, user) {
    if (err) {return next(err);}
    if (!user) {
      res.send({success:false});
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }

      // We are sending the profile inside the token
      var token = jwt.sign(user, config.secret, { expiresInMinutes: 60*5 });

      res.send({success:true, token: token});
    });
  });
  auth(req, res, next);
};

exports.requiresApiLogin = function (req, res, next) {
  if (!req.isAuthenticated()) {
    res.status(403);
    res.end();
  } else {
    next();
  }
};

exports.requiresRole = function (role) {
  return function (req, res, next) {
    if (!req.isAuthenticated() || req.user.roles.indexOf(role) === -1) {
      res.status(403);
      res.end();
    } else {
      next();
    }
  };
};
