"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const configurationPage_1 = __importDefault(require("./configurationPage"));
const coverPage_1 = __importDefault(require("./coverPage"));
function createDocument(props) {
    const pages = [];
    const { coverPage, configurations } = props;
    if (coverPage) {
        pages.push(react_1.default.createElement('PAGE', { size: 'A4', style: {}, key: 'cover' }, (0, coverPage_1.default)(coverPage)));
    }
    for (let index = 0; index < configurations.length; index++) {
        pages.push(react_1.default.createElement('PAGE', { size: 'A4', style: {}, key: `page-${index}` }, (0, configurationPage_1.default)(configurations[index])));
    }
    return react_1.default.createElement('DOCUMENT', { style: {} }, pages);
}
exports.default = createDocument;
//# sourceMappingURL=document.js.map