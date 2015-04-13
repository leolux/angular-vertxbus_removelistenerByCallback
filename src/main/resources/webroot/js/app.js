'use strict';

angular.module('myApp', [ 'ngRoute', 'knalli.angular-vertxbus' ]).config(
		[ '$routeProvider', 'vertxEventBusProvider',
				function($routeProvider, vertxEventBusProvider) {
					$routeProvider.when('/', {
						templateUrl : 'views/main.html',
						controller : 'MainCtrl'
					})

					vertxEventBusProvider.enable().useReconnect();
				} ]);

angular.module('myApp').controller(
		'MainCtrl',
		[
				'$scope',
				'vertxEventBusService',
				function($scope, vertxEventBusService) {
					$scope.main = this;
					$scope.main.state = 'disconnected';
					$scope.main.output = '';
					
					$scope.$on('vertx-eventbus.system.disconnected', function(
							event) {
						$scope.main.state = 'disconnected';
						console.log('disconnected');
					});

					$scope.$on('vertx-eventbus.system.connected', function(
							event) {
						$scope.main.state = 'connected';
						console.log('connected');
					});
					
					$scope.main.doRegister = function(){
						// register Listener
						registerBusListener(vertxEventBusService, function(
								message) {
							$scope.main.output += message + '\r\n';
						});
					};
					
					$scope.main.doUnregister = function(){
						// unregister listener
						unregisterBusListener(vertxEventBusService);
					};
					
					$scope.main.doRegister();
				} ]);

var callback = function(mesagge){
	console.log('<<<<<<<<<< ', message);
};

function registerBusListener(vertxEventBusService, callback) {
	vertxEventBusService.on('outbound.test', callback);
}

function unregisterBusListener(vertxEventBusService) {
	vertxEventBusService.removeListener('outbound.test', callback);
}