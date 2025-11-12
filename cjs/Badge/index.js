"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Badge = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const fenextjs_hook_1 = require("fenextjs-hook");
const Badge = ({ className = "", children, type, ...props }) => {
    const { _t } = (0, fenextjs_hook_1.use_T)({ ...props });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `
                    fenext-badge 
                    fenext-badge-${type}
                    ${className}
                `, "data-type": type },
            react_1.default.createElement("div", { className: `fenext-badge-content` }, _t(children)))));
};
exports.Badge = Badge;
//# sourceMappingURL=index.js.map