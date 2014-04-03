function mvNotifier(mvToastr) {
  return {
    notify: function (msg) {
      mvToastr.success(msg);
    },
    error: function (msg) {
      mvToastr.error(msg);
    }
  }
}