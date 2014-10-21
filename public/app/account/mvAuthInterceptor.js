define(['angular'], function () {

  function mvAuthInterceptor($q, localStorageService) {
    //noinspection JSUnusedGlobalSymbols
    return {
      request: function (config) {
        config.headers = config.headers || {};
        var token = localStorageService.get('token');
        if (token) {
          config.headers.Authorization = 'Bearer ' + token;
        }
        return config;
    },
      response: function (response) {
        if (response.status === 401 || response.status === 403) {
          localStorageService.unset('user');
          console.log('uh ow... 401 or 403');
        }
        return response || $q.when(response);
      }
    };
  }

  return mvAuthInterceptor;
});
