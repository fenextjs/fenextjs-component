"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleWeekly = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Day_1 = require("fenextjs-interface/cjs/Day");
const Multiple_1 = require("../../Collapse/Multiple");
const Title_1 = require("../../Title");
const Day_2 = require("../Day");
const fenextjs_hook_1 = require("fenextjs-hook");
const fenextjs_hook_2 = require("fenextjs-hook");
const ScheduleWeekly = ({ title = "Schedule Weekly", className = "", defaultValue = {}, value = undefined, onChange, CollapseMultipleProps = {
    name: "schedule",
    type: "radio",
    defaultActive: 0,
}, onParseHeaderDay, ...props }) => {
    const { _t } = (0, fenextjs_hook_2.use_T)({ ...props });
    const { data, onChangeData } = (0, fenextjs_hook_1.useData)(defaultValue, {
        onChangeDataAfter: onChange,
        data: value,
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-schedule-weekly ${className} ` },
            react_1.default.createElement(Title_1.Title, { tag: "h4" }, _t(title)),
            react_1.default.createElement(Multiple_1.CollapseMultiple, { ...CollapseMultipleProps, items: Object.keys(Day_1.DaysEnum).map((e) => {
                    const day = e;
                    return {
                        children: (react_1.default.createElement(react_1.default.Fragment, null,
                            react_1.default.createElement(Day_2.ScheduleDay, { ...props, defaultValue: defaultValue?.[day], value: data?.[day], onChange: onChangeData(day), _t: _t }))),
                        header: (react_1.default.createElement(react_1.default.Fragment, null, _t((onParseHeaderDay
                            ? onParseHeaderDay(day)
                            : day) ?? day))),
                    };
                }) }))));
};
exports.ScheduleWeekly = ScheduleWeekly;
//# sourceMappingURL=index.js.map