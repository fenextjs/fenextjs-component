"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputSelectTimeZone = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const SelectT_1 = require("../SelectT");
const Options_1 = require("./Options");
const InputSelectTimeZone = ({ useTOption = false, ...props }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(SelectT_1.InputSelectT, { ...props, options: Options_1.TimeZoneList, onParse: (e) => {
                const r = {
                    id: e?.time ?? "",
                    text: `${e?.time ?? ""}`,
                    data: e,
                };
                return r;
            }, useTOption: useTOption })));
};
exports.InputSelectTimeZone = InputSelectTimeZone;
