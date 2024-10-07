"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Portal = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_dom_1 = require("react-dom");
const Portal = ({ children, container = document.body, }) => {
    return (0, react_dom_1.createPortal)(react_1.default.createElement(react_1.default.Fragment, null, children), container);
};
exports.Portal = Portal;
//# sourceMappingURL=index.js.map