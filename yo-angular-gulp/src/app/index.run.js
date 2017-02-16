(function() {
  'use strict';

  angular
    .module('yoAngularGulp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
