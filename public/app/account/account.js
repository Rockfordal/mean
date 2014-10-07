define(['app', 'account/mvNavBarLoginCtrl', 'account/mvUser', 'account/mvAuth'],
  function(app, mvLoginCtrl, mvUser, mvAuth) {

  app
    .factory('mvAuth', mvAuth)
    .factory('mvUser', mvUser)
    .controller('mvNavBarLoginCtrl', mvLoginCtrl);

  return app

});
