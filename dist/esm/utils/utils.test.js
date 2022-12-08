/* eslint-disable no-underscore-dangle */
import { __awaiter, __generator } from "tslib";
import { flattenObjectToDotted, getId } from './utils';
it('transforms an object into an array of dotted paths', function () { return __awaiter(void 0, void 0, void 0, function () {
    var paths, obj;
    return __generator(this, function (_a) {
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
        flattenObjectToDotted(paths, obj, '');
        expect(paths.length).toEqual(2);
        expect(paths[0]).toEqual('test.testDeep.testDeeper');
        expect(paths[1]).toEqual('test2.test2deep.test2deeper');
        return [2 /*return*/];
    });
}); });
it('gets the id out of a linkId', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        expect(getId({ linkId: 'step1' })).toEqual('step1');
        expect(getId({ linkId: 'step1.page1' })).toEqual('step1_page1');
        expect(getId({ linkId: 'step1.page1.input1' })).toEqual('step1_page1_input1');
        expect(getId({ linkId: 'step1', indexRepeat: 0 })).toEqual('step1');
        expect(getId({ linkId: 'step1', indexRepeat: 1 })).toEqual('step1');
        return [2 /*return*/];
    });
}); });
//# sourceMappingURL=utils.test.js.map