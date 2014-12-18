'use strict';

var sampleApp = angular.module('sampleApp');

// Accounts API Service
sampleApp.factory('accountsApi', ['$http', 'apiRoots',
  function ($http, apiRoots) {
    var doLogin = function(emailAddr, password, remember) {
      return $http({
          method: 'POST',
          url: apiRoots.sampleRempteApi() + '/accounts/login',
          data: { emailAddr: emailAddr, password: password, remember: remember },
          headers: {'Content-Type': 'application/json'}
      });
    };

    var doSignup = function(emailAddr, password, passwordConfirm) {
      $http({
          method: 'POST',
          url: apiRoots.sampleRempteApi() + '/accounts/signup',
          data: {emailAddr: emailAddr, password: password, passwordConfirm: passwordConfirm },
          headers: {'Content-Type': 'application/json'}
      });
    }

    return {
      doLogin: doLogin,
      doSignup: doSignup
    };
  }
]);