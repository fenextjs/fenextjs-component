"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleDay = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const DateRange_1 = require("../../Input/DateRange");
const fenextjs_hook_1 = require("fenextjs-hook");
const Close_1 = require("fenextjs-svg/cjs/Close");
const Button_1 = require("../../Button");
const ScheduleDay = ({ className = "", defaultValue = [[undefined, undefined]], value = undefined, onChange, propsStart = {
    label: "Start time",
    placeholder: "Start time",
}, propsEnd = {
    label: "Final hour",
    placeholder: "Final hour",
}, ButtonProps = {
    children: "Add Time Range",
}, ...props }) => {
    const { _t } = (0, fenextjs_hook_1.use_T)({ ...props });
    const { data, onChangeData, setData, onDeleteData } = (0, fenextjs_hook_1.useData)(defaultValue, {
        onChangeDataAfter: onChange,
        onDeleteDataAfter: onChange,
        data: value,
    });
    const onAddTimeRange = () => {
        setData([...data, [undefined, undefined]]);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-schedule-day ${className} ` },
            react_1.default.createElement("div", { className: "fenext-schedule-day-content-date-range" }, data.map((e, i) => {
                return (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("div", { key: `${i}-${JSON.stringify(e)}`, className: "fenext-schedule-day-date-range" },
                        react_1.default.createElement(DateRange_1.InputDateRange, { type: "time", defaultValue: e, onChange: onChangeData(i), propsStart: propsStart, propsEnd: propsEnd, ...props, _t: _t }),
                        react_1.default.createElement("div", { className: "fenext-schedule-day-date-range-close", onClick: () => {
                                onDeleteData(i);
                            } },
                            react_1.default.createElement(Close_1.Close, null)))));
            })),
            react_1.default.createElement("div", { className: "fenext-schedule-day-content-btn" },
                react_1.default.createElement(Button_1.Button, { ...ButtonProps, onClick: onAddTimeRange, _t: _t })))));
};
exports.ScheduleDay = ScheduleDay;
//# sourceMappingURL=index.js.map