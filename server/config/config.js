var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {

  development: {
    secret: 'tyst123',
    rootPath: rootPath,
    db: 'mongodb://localhost/multivision',
    port: process.env.PORT || 3030
  },

  production: {
    secret: 'tyst123',
    rootPath: rootPath,
    db: 'mongodb://localhost/multivision',
    port: process.env.PORT || 3030
  }
};
