"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputCalendar = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const Text_1 = require("../Text");
const Date_1 = require("fenextjs-svg/cjs/Date");
const Collapse_1 = require("../../Collapse");
const useDate_1 = require("fenextjs-hook/cjs/useDate");
const fenextjs_hook_1 = require("fenextjs-hook");
const Month_1 = require("./Month");
const fenextjs_date_1 = require("fenextjs-date");
const InputCalendar = ({ nMonthShow = 1, icon = react_1.default.createElement(Date_1.Date, null), type = "normal", defaultValue, value, defaultValueRange, valueRange, onChange, onChangeRange, validator, errorWithIsChange = true, ...props }) => {
    const [isChange, setIsChange] = (0, react_1.useState)(!errorWithIsChange);
    const { data: dataSelectDate, setData: setSelectDate } = (0, fenextjs_hook_1.useData)(defaultValue, {
        onChangeDataAfter: (e) => {
            setIsChange(true);
            onChange?.(e);
        },
    });
    const selectDate = (0, react_1.useMemo)(() => value ?? dataSelectDate, [value, dataSelectDate]);
    const [dataNSelect, setDataNSelect] = (0, react_1.useState)(true);
    const { data: dataSelectDateRange, setDataFunction: setSelectDateRange } = (0, fenextjs_hook_1.useData)(defaultValueRange ?? [], {
        onChangeDataAfter: (e) => {
            setIsChange(true);
            onChangeRange?.(e);
        },
    });
    const selectDateRange = (0, react_1.useMemo)(() => valueRange ?? dataSelectDateRange, [valueRange, dataSelectDateRange]);
    const date = (0, useDate_1.useDate)({});
    const onPreMonth = () => {
        date.addMonth(-1);
    };
    const onNextMonth = () => {
        date.addMonth(1);
    };
    const { error: errorFenext } = (0, fenextjs_hook_1.useValidator)({
        data: type == "normal" ? selectDate : selectDateRange,
        validator,
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-input-calendar` },
            react_1.default.createElement(Collapse_1.Collapse, { header: react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(Text_1.InputText, { ...props, icon: icon, value: type == "normal"
                            ? `${selectDate ? date.onFormat({}, selectDate) : ""}`
                            : `${selectDateRange &&
                                selectDateRange.length == 2
                                ? `${date.onFormat({}, selectDateRange[0])} - ${date.onFormat({}, selectDateRange[1])}`
                                : ""}`, error: errorFenext, errorWithIsChange: !isChange })) },
                react_1.default.createElement("div", { className: `fenext-input-calendar-content fenext-input-calendar-content-${nMonthShow > 1 ? "multiple" : ""}` },
                    react_1.default.createElement(Month_1.InputCalendarMonth, { _t: props?._t, type: type, dataNSelect: dataNSelect, selectDate: selectDate, selectDateRange: selectDateRange, setDataNSelect: setDataNSelect, setSelectDate: setSelectDate, setSelectDateRange: setSelectDateRange, date: date, onNextMonth: onNextMonth, onPreMonth: onPreMonth, ...props }),
                    nMonthShow > 1 && (react_1.default.createElement(react_1.default.Fragment, null, new Array(nMonthShow - 1)
                        .fill(1)
                        .map((e, i) => {
                        const n = e * i + 1;
                        const d = new Date(date?.date ?? 0);
                        d.setMonth(d.getMonth() + n);
                        const dateN = new fenextjs_date_1.FenextjsDate({
                            defaultDate: d,
                        });
                        return (react_1.default.createElement(react_1.default.Fragment, null,
                            react_1.default.createElement(Month_1.InputCalendarMonth, { key: n, _t: props?._t, type: type, dataNSelect: dataNSelect, selectDate: selectDate, selectDateRange: selectDateRange, setDataNSelect: setDataNSelect, setSelectDate: setSelectDate, setSelectDateRange: setSelectDateRange, date: dateN, onNextMonth: onNextMonth, onPreMonth: onPreMonth, ...props })));
                    }))))))));
};
exports.InputCalendar = InputCalendar;
//# sourceMappingURL=index.js.map