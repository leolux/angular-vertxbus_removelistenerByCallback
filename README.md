# angular-vertxbus_removelistenerByCallback
Reproducer for https://github.com/knalli/angular-vertxbus/issues/52

1. Start MainVertx (the server sends a message every 3 seconds)
2. Open http://localhost:8484/ in the browser
3. Click the button "Unregister"
4. Client produces error: Parameter handler must be specified
    at checkSpecified (http://localhost:8484/js/vertxbus.js:193:15)
    at vertx.EventBus.that.unregisterHandler (http://localhost:8484/js/vertxbus.js:83:7)
    at Object.angular.module.provider.$get.EventBusStub.unregisterHandler (http://localhost:8484/js/angular-vertxbus.js:224:31)
    at Object.angular.module.provider.$get.util.unregisterHandler (http://localhost:8484/js/angular-vertxbus.js:549:25)
    at Object.angular.module.provider.$get.wrapped.unregisterHandler (http://localhost:8484/js/angular-vertxbus.js:666:25)
    at unregisterBusListener (http://localhost:8484/js/app.js:61:23)
    at $scope.main.doUnregister (http://localhost:8484/js/app.js:46:7)
    at $parseFunctionCall (http://localhost:8484/js/angular.js:12345:18)
    at ngEventDirectives.(anonymous function).compile.element.on.callback (http://localhost:8484/js/angular.js:21438:17)
    at Scope.$get.Scope.$eval (http://localhost:8484/js/angular.js:14401:28)
