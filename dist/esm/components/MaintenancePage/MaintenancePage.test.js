import { __assign, __awaiter, __generator } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, waitFor } from '../../testHelpers/testUtils';
import MaintenancePage from '.';
import defaultMaintenanceModeQuery from './maintenance';
jest.mock('./maintenance');
var mockedGetMaintenanceMode = defaultMaintenanceModeQuery;
describe('MaintenancePage', function () {
    function TestComponent() {
        return _jsx("h1", { children: "Test Component" });
    }
    describe('use maintenance to false', function () {
        it("shows Test Component with 'useMaintenancePage=false'", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        render(_jsx(MaintenancePage, __assign({ getMaintenanceMode: defaultMaintenanceModeQuery, pollInterval: 10, useMaintenancePage: false }, { children: TestComponent() })));
                        return [4 /*yield*/, waitFor(function () {
                                expect(screen.getByText('Test Component')).toBeInTheDocument();
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
        it("shows Test Component with 'maintenanceMode=false'", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        render(_jsx(MaintenancePage, __assign({ getMaintenanceMode: defaultMaintenanceModeQuery, pollInterval: 10, useMaintenancePage: true }, { children: TestComponent() })));
                        return [4 /*yield*/, waitFor(function () {
                                expect(screen.getByText('Test Component')).toBeInTheDocument();
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
        it("shows MaintenancePage with custom message with 'maintenanceMode=true'", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        render(_jsx(MaintenancePage, __assign({ getMaintenanceMode: mockedGetMaintenanceMode, pollInterval: 10, useMaintenancePage: true }, { children: TestComponent() })));
                        return [4 /*yield*/, waitFor(function () {
                                expect(screen.getByText('This service is currently unavailable')).toBeInTheDocument();
                                expect(screen.getByText('Please try again later')).toBeInTheDocument();
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
        it("shows MaintenancePage with default message if response status >= 400", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        render(_jsx(MaintenancePage, __assign({ getMaintenanceMode: mockedGetMaintenanceMode, pollInterval: 10, useMaintenancePage: true }, { children: TestComponent() })));
                        return [4 /*yield*/, waitFor(function () {
                                expect(screen.getByText('This service is currently unavailable')).toBeInTheDocument();
                                expect(screen.getByText('API Unavailable')).toBeInTheDocument();
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