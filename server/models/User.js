var mongoose = require('mongoose'),
  encrypt = require('../utilities/encryption');

  var userSchema = mongoose.Schema({
    firstName:  {type:String, required:'{PATH} is required'},
    lastName:   {type:String, required:'{PATH} is required'},
    username:   {type:String, required:'{PATH} is required', unique:true},
    salt:       {type:String, required:'{PATH} is required'},
    hashed_pwd: {type:String, required:'{PATH} is required'},
    roles: [String]
  });

  userSchema.methods = {
    authenticate: function (passwordToMatch) {
      return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
    }
  };

var User = mongoose.model('User', userSchema);

function createDefaultUsers() {
  User.find({}).exec(function (err, collection) {
    if (collection.length === 0) {
      var salt, hash;
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'andersl');
      var andersl = {firstName: 'Anders', lastName: 'Lundström', username: 'andersl', salt: salt, hashed_pwd: hash, roles: ['admin']};
      User.create(andersl, function(err){
        if (err) console.log('fel: ' + err);
      });

      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'hakan');
      User.create({firstName: 'Håkan', lastName: 'Gustafsson',  username: 'hakan', salt: salt, hashed_pwd: hash, roles: ['admin']});

      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'mattias');
      User.create({firstName: 'Mattias',  lastName: 'Östholm', username: 'mattias', salt: salt, hashed_pwd: hash, roles: []});
      console.log('har skapat användare');
    }
  })
}

exports.createDefaultUsers = createDefaultUsers;
