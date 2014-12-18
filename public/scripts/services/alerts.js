'use strict';

var sampleApp = angular.module('sampleApp');

// Alert Service
sampleApp.factory('alertService', function () {
	var alerts = [];

	var addAlert = function(type, message) {
		alerts.push({ type: type, msg: message });
	};

	var closeAlert = function(index) {
		alerts.splice(index, 1);
	}

	return {
		alerts: alerts,
		addAlert: addAlert,
		closeAlert: closeAlert
	};
});