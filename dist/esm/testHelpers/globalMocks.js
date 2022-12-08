var alert = window.alert;
beforeAll(function () {
    Object.defineProperty(window, 'alert', {
        value: jest.fn()
    });
});
afterAll(function () {
    Object.defineProperty(window, 'alert', {
        value: alert
    });
});
// NOTE: Removing all the noise in the tests around "act"
var originalError = global.console.error;
beforeAll(function () {
    global.console.error = jest.fn(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (typeof args[0] === 'string') {
            return;
        }
        return originalError.call(console, args);
    });
});
afterAll(function () {
    var error = global.console.error;
    error.mockRestore();
});
export {};
//# sourceMappingURL=globalMocks.js.map