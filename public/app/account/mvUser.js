define([], function () {

  function mvUser(restmod) {
    var UserResource = restmod.model('/apiusers');

    //noinspection JSUnusedGlobalSymbols
    UserResource.mix({
      $extend: {
        Record: {
          isAdmin: function () {
            return this.roles && this.roles.indexOf('admin') > -1;
          }
        }
      }
    });

    return UserResource;
  }

  return mvUser;
});
