"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputSelectTimeZone = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const SelectT_1 = require("../SelectT");
const options_1 = require("./options");
const InputSelectTimeZone = ({ ...props }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(SelectT_1.InputSelectT, { ...props, options: options_1.TimeZoneList, onParse: (e) => {
                const r = {
                    id: e?.time ?? "",
                    text: `${e?.time ?? ""}`,
                    data: e,
                };
                return r;
            } })));
};
exports.InputSelectTimeZone = InputSelectTimeZone;
//# sourceMappingURL=index.js.map