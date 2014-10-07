define(['app','common/mvIdentity', 'common/mvNotifier', 'toastr'],
  function(app, mvIdentity, mvNotifier, toastr) {

  app.value('mvToastr', toastr);
  app.factory('mvIdentity', mvIdentity);
  app.factory('mvNotifier', mvNotifier);

  return app
});