"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputUnitBase = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const TextSelect_1 = require("../../TextSelect");
const fenextjs_hook_1 = require("fenextjs-hook");
const Unit_1 = require("fenextjs-functions/cjs/parse/Unit");
const Number_1 = require("fenextjs-functions/cjs/parse/Number");
const InputUnitBase = ({ defaultValue = {}, value: valueProps = undefined, onChange, options, ...props }) => {
    const { data, setData } = (0, fenextjs_hook_1.useData)({
        unit: defaultValue?.unit,
        value: defaultValue?.value ? `${defaultValue?.value}` : undefined,
    }, {
        onChangeDataAfter: (e) => {
            onChange?.({
                unit: e.unit,
                value: e.value ? (0, Number_1.parseNumber)(e.value) : undefined,
            });
        },
    });
    const value = (0, react_1.useMemo)(() => valueProps ?? data, [valueProps, data]);
    const parseValue = (va) => {
        const v = `${va}`.replace(/[^0-9.]/g, "");
        const nm = v.split(".");
        const first = `${nm[0]}`;
        let n_ = `${first}`;
        if (nm.length > 1) {
            nm[0] = "";
            n_ += `.${nm.join("")}`;
        }
        if (va[0] == "-") {
            n_ = "-" + n_;
        }
        return n_;
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(TextSelect_1.InputTextSelect, { ...props, value: {
                text: value.value
                    ? parseValue(`${value.value}`)
                    : undefined,
                select: value.unit
                    ? {
                        id: value.unit,
                        text: (0, Unit_1.parseUnitToText)(value.unit),
                    }
                    : undefined,
            }, options: options.map((o) => {
                return {
                    id: o,
                    text: (0, Unit_1.parseUnitToText)(o),
                };
            }), onChange: (e) => {
                setData({
                    unit: e.select?.id,
                    value: e.text,
                });
            } })));
};
exports.InputUnitBase = InputUnitBase;
