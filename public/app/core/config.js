define(['app'], function (app) {

  mvToastr.options = {
    positionClass: "toast-bottom-full-width"
  };

  app
    .config(function ($locationProvider) {
      $locationProvider.html5Mode(true);
    });

});
