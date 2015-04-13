# angular-vertxbus_removelistenerByCallback
Example code for testing the vertxEventBusService removeListener(address, callback) function. The test shows that the listener gets unregistered successfully without an error both before and after a reconnect.

1. Start MainVertx (the server sends a message every 3 seconds)
2. Open http://localhost:8484/ in the browser
3. Restart the server
4. Click the button "Unregister"