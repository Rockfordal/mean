define(['toastr'], function (toastr) {

  function config($locationProvider) {
    $locationProvider.html5Mode({enabled: true, requireBase: false});

    toastr.options = {
      positionClass: 'toast-bottom-full-width'
    };
  }

  return config;
});
