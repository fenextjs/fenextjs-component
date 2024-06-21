"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignBoxBorderColor = void 0;
const tslib_1 = require("tslib");
const fenextjs_functions_1 = require("fenextjs-functions");
const react_1 = tslib_1.__importStar(require("react"));
const Text_1 = require("../../../Text");
const fenextjs_hook_1 = require("fenextjs-hook");
const Color_1 = require("../../../Input/Color");
const DesignBoxBorderColor = ({ _t, textBorderColor = "Border Color", defaultValue = {}, value, onChange, }) => {
    const { data: data_, onChangeData } = (0, fenextjs_hook_1.useData)(defaultValue, {
        onChangeDataAfter: onChange,
    });
    const data = (0, react_1.useMemo)(() => value ?? data_, [value, data_]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-design-box-item fenext-design-box-item-1-2` },
            react_1.default.createElement(Text_1.Text, null, (0, fenextjs_functions_1._tValidate)(textBorderColor, _t)),
            react_1.default.createElement(Color_1.InputColor, { value: data.borderColor, onChange: onChangeData("borderColor") }))));
};
exports.DesignBoxBorderColor = DesignBoxBorderColor;
//# sourceMappingURL=index.js.map