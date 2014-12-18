'use strict';

var sampleApp = angular.module('sampleApp');

// Config Routes
sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/login', {
        templateUrl: '/partials/accounts/login.html',
        controller: 'AccountsCtrl'
      }).
      when('/signup', {
        templateUrl: '/partials/accounts/signup.html',
        controller: 'AccountsCtrl'
      }).
      otherwise({
        redirectTo: '/login'
      });
  }
]);


// Accounts Controller
sampleApp.controller('AccountsCtrl', ['$scope', '$http', '$window', 'alertService', 'accountsApi',
  function ($scope, $http, $window, alertService, accountsApi) {
    $scope.emailAddr = "";
    $scope.password = "";
    $scope.remember = 0;
    $scope.alerts = alertService.alerts;

    $scope.doLogin = function() {
      login();
    };

    $scope.doSignup = function() {
      signup();
    } 

    $scope.closeAlert = function(index) {
      alertService.closeAlert(index);
    };    

    function login() {
      var loginPromise = accountsApi.doLogin($scope.emailAddr, $scope.password, $scope.remember);
      loginPromise.then(
        function(resp) {
          $window.location.href = '/home';
        },
        function(errorResp) {
          alertService.alerts.length = 0;
          alertService.addAlert('danger', errorResp.data.error.message);
        }
      );
    }

    function signup() {
      var signupPromise = accountsApi.doSignup($scope.emailAddr, $scope.password, $scope.passwordConfirm);
      signupPromise.then(
        function(resp) {
          $window.location.href = '/home';
        },
        function(errorResp) {
          alertService.alerts.length = 0;
          alertService.addAlert('danger', errorResp.data.error.message);
        }
      );
    }
  } 

]);