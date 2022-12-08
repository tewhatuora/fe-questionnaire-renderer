"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultPartialSubmitQuery = exports.useFormData = exports.FormDataProvider = exports.FormDataContext = void 0;
var FormDataProvider_1 = require("./FormDataProvider");
Object.defineProperty(exports, "FormDataContext", { enumerable: true, get: function () { return FormDataProvider_1.FormDataContext; } });
Object.defineProperty(exports, "FormDataProvider", { enumerable: true, get: function () { return FormDataProvider_1.FormDataProvider; } });
Object.defineProperty(exports, "useFormData", { enumerable: true, get: function () { return FormDataProvider_1.useFormData; } });
var partialSubmit_1 = require("./partialSubmit");
Object.defineProperty(exports, "defaultPartialSubmitQuery", { enumerable: true, get: function () { return __importDefault(partialSubmit_1).default; } });
//# sourceMappingURL=index.js.map