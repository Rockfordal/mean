define(['toastr'], function (toastr) {

  function mvNotifier() {

    var service = {
      notify: notify,
      error: error
    };

    function notify(msg) {
      toastr.success(msg);
    }

    function error(msg) {
      toastr.error(msg);
    }

    return service;
  }

  return mvNotifier;
});
