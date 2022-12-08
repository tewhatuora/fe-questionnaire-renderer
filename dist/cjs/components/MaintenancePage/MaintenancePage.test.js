"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var testUtils_1 = require("../../testHelpers/testUtils");
var _1 = tslib_1.__importDefault(require("."));
var maintenance_1 = tslib_1.__importDefault(require("./maintenance"));
jest.mock('./maintenance');
var mockedGetMaintenanceMode = maintenance_1.default;
describe('MaintenancePage', function () {
    function TestComponent() {
        return (0, jsx_runtime_1.jsx)("h1", { children: "Test Component" });
    }
    describe('use maintenance to false', function () {
        it("shows Test Component with 'useMaintenancePage=false'", function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        (0, testUtils_1.render)((0, jsx_runtime_1.jsx)(_1.default, tslib_1.__assign({ getMaintenanceMode: maintenance_1.default, pollInterval: 10, useMaintenancePage: false }, { children: TestComponent() })));
                        return [4 /*yield*/, (0, testUtils_1.waitFor)(function () {
                                expect(testUtils_1.screen.getByText('Test Component')).toBeInTheDocument();
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('Healthcheck maintenance response to false', function () {
        beforeEach(function () {
            mockedGetMaintenanceMode.mockResolvedValue({
                status: 200,
                data: {
                    inMaintenance: 'false',
                    maintenanceMessage: 'Please try again later'
                }
            });
        });
        it("shows Test Component with 'maintenanceMode=false'", function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        (0, testUtils_1.render)((0, jsx_runtime_1.jsx)(_1.default, tslib_1.__assign({ getMaintenanceMode: maintenance_1.default, pollInterval: 10, useMaintenancePage: true }, { children: TestComponent() })));
                        return [4 /*yield*/, (0, testUtils_1.waitFor)(function () {
                                expect(testUtils_1.screen.getByText('Test Component')).toBeInTheDocument();
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('Healthcheck maintenance response set to true', function () {
        beforeEach(function () {
            mockedGetMaintenanceMode.mockResolvedValue({
                status: 200,
                data: {
                    inMaintenance: 'true',
                    maintenanceMessage: 'Please try again later'
                }
            });
        });
        it("shows MaintenancePage with custom message with 'maintenanceMode=true'", function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        (0, testUtils_1.render)((0, jsx_runtime_1.jsx)(_1.default, tslib_1.__assign({ getMaintenanceMode: mockedGetMaintenanceMode, pollInterval: 10, useMaintenancePage: true }, { children: TestComponent() })));
                        return [4 /*yield*/, (0, testUtils_1.waitFor)(function () {
                                expect(testUtils_1.screen.getByText('This service is currently unavailable')).toBeInTheDocument();
                                expect(testUtils_1.screen.getByText('Please try again later')).toBeInTheDocument();
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('response status 400', function () {
        beforeEach(function () {
            mockedGetMaintenanceMode.mockRejectedValue(new Error('Bad request mate.'));
        });
        it("shows MaintenancePage with default message if response status >= 400", function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        (0, testUtils_1.render)((0, jsx_runtime_1.jsx)(_1.default, tslib_1.__assign({ getMaintenanceMode: mockedGetMaintenanceMode, pollInterval: 10, useMaintenancePage: true }, { children: TestComponent() })));
                        return [4 /*yield*/, (0, testUtils_1.waitFor)(function () {
                                expect(testUtils_1.screen.getByText('This service is currently unavailable')).toBeInTheDocument();
                                expect(testUtils_1.screen.getByText('API Unavailable')).toBeInTheDocument();
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
//# sourceMappingURL=MaintenancePage.test.js.map