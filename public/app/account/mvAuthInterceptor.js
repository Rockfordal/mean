define(['angular'], function (angular) {

  function mvAuthInterceptor($rootScope, $q, $window, localStorageService) {
    return {
      request: function (config) {
        config.headers = config.headers || {};
        var token = localStorageService.get('token');
        if (token) {
          config.headers.Authorization = 'Bearer ' + token;
        } else {
          console.log('no token found!');
        }
        return config;
      },
      response: function (response) {
        if (response.status === 401 || response.status === 403) {
          localService.unset('user');
          console.log('uh ow... 401 or 403');
        }
        return response || $q.when(response);
      }
    };
  }

  return mvAuthInterceptor;
});
