define([], function () {

  function mvFilter($filter) {

    var service = {
      sok: sok,
			paginera: paginera
    };

		function sok (data, text) {
			return $filter('filter')(data, text);
		};
		
		function paginera(loggswipes, currentPage, itemsPerPage) {
			var begin = ((currentPage - 1) * itemsPerPage);
      var end = begin + itemsPerPage;
      return loggswipes.slice(begin, end);
		};
		
    return service;
  }

  return mvFilter;
});