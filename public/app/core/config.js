define(['toastr'], function (toastr) {

  function config($locationProvider) {
    $locationProvider.html5Mode(true);

    toastr.options = {
      positionClass: "toast-bottom-full-width"
    };
  }

  return config
});
