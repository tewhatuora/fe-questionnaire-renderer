"use strict";
/* eslint-disable no-underscore-dangle */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var utils_1 = require("./utils");
it('transforms an object into an array of dotted paths', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var paths, obj;
    return tslib_1.__generator(this, function (_a) {
        paths = [];
        obj = {
            test: {
                testDeep: {
                    testDeeper: ''
                }
            },
            test2: {
                test2deep: {
                    test2deeper: ''
                }
            }
        };
        (0, utils_1.flattenObjectToDotted)(paths, obj, '');
        expect(paths.length).toEqual(2);
        expect(paths[0]).toEqual('test.testDeep.testDeeper');
        expect(paths[1]).toEqual('test2.test2deep.test2deeper');
        return [2 /*return*/];
    });
}); });
it('gets the id out of a linkId', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        expect((0, utils_1.getId)({ linkId: 'step1' })).toEqual('step1');
        expect((0, utils_1.getId)({ linkId: 'step1.page1' })).toEqual('step1_page1');
        expect((0, utils_1.getId)({ linkId: 'step1.page1.input1' })).toEqual('step1_page1_input1');
        expect((0, utils_1.getId)({ linkId: 'step1', indexRepeat: 0 })).toEqual('step1');
        expect((0, utils_1.getId)({ linkId: 'step1', indexRepeat: 1 })).toEqual('step1');
        return [2 /*return*/];
    });
}); });
//# sourceMappingURL=utils.test.js.map