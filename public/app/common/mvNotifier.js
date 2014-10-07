define(['common/common'], function () {

  function svc(mvToastr) {
    return {
      notify: function (msg) {
        mvToastr.success(msg);
      },
      error:  function (msg) {
        mvToastr.error(msg);
      }
    }
  }
  return svc;
});
