var mongoose = require('mongoose'),
    crypto =  require('crypto');

module.exports = function(config) {
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function callback() {
    console.log('multivision db opened');
  });

  var userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    userName: String,
    salt: String,
    hashed_pwd: String,
    roles: [String]
  });

  userSchema.methods = {
    authenticate: function (passwordToMatch) {
      return hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
    }
  };

  var User = mongoose.model('User', userSchema);

  User.find({}).exec(function (err, collection) {
    if (collection.length === 0) {
      var salt, hash;
      salt = createSalt();
      hash = hashPwd(salt, 'andersl');
      User.create({firstName: 'Anders',  lastName: 'Lundström',  userName: 'andersl', salt: salt, hashed_pwd: hash, roles: ['admin']});
      salt = createSalt();
      hash = hashPwd(salt, 'hakan');
      User.create({firstName: 'Håkan', lastName: 'Gustafsson',   userName: 'hakan', salt: salt, hashed_pwd: hash, roles: ['admin']});
      salt = createSalt();
      hash = hashPwd(salt, 'mattias');
      User.create({firstName: 'Mattias',  lastName: 'Östholm', userName: 'mattias', salt: salt, hashed_pwd: hash, roles: []});
    }
  });

  function createSalt() {
    return crypto.randomBytes(128).toString('base64');
  }

  function hashPwd(salt, pwd) {
    var hmac = crypto.createHmac('sha1', salt);
    return hmac.update(pwd).digest('hex');
  }

  //var messageSchema = mongoose.Schema({message: String});
  //var Message = mongoose.model('Message', messageSchema);
  //var mongoMessage;
  //Message.findOne().exec(function(err, messageDoc) {
  //    mongoMessage = messageDoc.message;
  //});
};