define([], function () {

  var common = {
    routeRoleChecks: routeRoleChecks()
  };

  function routeRoleChecks() {
    return {
      admin: { auth: function (mvAuth) {
        return mvAuth.authorizeCurrentUserForRoute('admin')
      }},
      user:  { auth: function (mvAuth) {
        return mvAuth.authorizeAuthenticatedUserForRoute()
      }}
    }
  }

  return common
});
