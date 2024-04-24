"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputCalendarMonth = void 0;
const tslib_1 = require("tslib");
const fenextjs_interface_1 = require("fenextjs-interface");
const react_1 = tslib_1.__importDefault(require("react"));
const fenextjs_svg_1 = require("fenextjs-svg");
const fenextjs_functions_1 = require("fenextjs-functions");
const InputCalendarMonth = ({ type = "normal", _t, onPreMonth, onNextMonth, date, selectDate, selectDateRange, setSelectDate, setSelectDateRange, dataNSelect, setDataNSelect, }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-input-calendar-month` },
            react_1.default.createElement("div", { className: `fenext-input-calendar-top` },
                react_1.default.createElement("button", { className: `fenext-input-calendar-btn`, onClick: onPreMonth },
                    react_1.default.createElement(fenextjs_svg_1.PaginationPre, null)),
                react_1.default.createElement("div", { className: `fenext-input-calendar-top-info` }, date?.onFormat({
                    month: "long",
                    year: "numeric",
                })),
                react_1.default.createElement("button", { className: `fenext-input-calendar-btn`, onClick: onNextMonth },
                    react_1.default.createElement(fenextjs_svg_1.PaginationNext, null))),
            react_1.default.createElement("div", { className: `fenext-input-calendar-days` }, [
                fenextjs_interface_1.DaysEnum.Sunday,
                fenextjs_interface_1.DaysEnum.Monday,
                fenextjs_interface_1.DaysEnum.Tuesday,
                fenextjs_interface_1.DaysEnum.Wednesday,
                fenextjs_interface_1.DaysEnum.Thursday,
                fenextjs_interface_1.DaysEnum.Friday,
                fenextjs_interface_1.DaysEnum.Saturday,
            ].map((day, i) => {
                return (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("div", { key: i, "data-day": day, className: `fenext-input-calendar-day` }, (0, fenextjs_functions_1._tValidate)(day, _t)[0])));
            })),
            date?.onGenerateDateByCalendar()?.map((d, i) => {
                return (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("div", { key: i, "data-date": d.getDate(), "data-month": d.getMonth() + 1, "data-year": d.getFullYear(), onClick: () => {
                            if (type == "normal") {
                                setSelectDate(d);
                            }
                            if (type == "range") {
                                if (dataNSelect) {
                                    setSelectDateRange(() => {
                                        return [d];
                                    });
                                }
                                else {
                                    setSelectDateRange((old) => {
                                        return [...old, d].sort((a, b) => a.getTime() -
                                            b.getTime());
                                    });
                                }
                                setDataNSelect((e) => !e);
                            }
                        }, className: `
                                fenext-input-calendar-date
                                fenext-input-calendar-date-${d.getMonth() == date.date.getMonth() ? "in-month" : "other-month"}
                                fenext-input-calendar-date-${type == "normal" && d.getTime() == selectDate?.getTime() ? "select" : ""}
                                fenext-input-calendar-date-${type == "range" && d.getTime() == selectDateRange[0]?.getTime() ? "select" : ""}
                                fenext-input-calendar-date-${type == "range" && d.getTime() > selectDateRange[0]?.getTime() && d.getTime() < selectDateRange[1]?.getTime() ? "select-range" : ""}
                                fenext-input-calendar-date-${type == "range" && d.getTime() == selectDateRange[1]?.getTime() ? "select" : ""}
                            ` }, d?.getDate())));
            }))));
};
exports.InputCalendarMonth = InputCalendarMonth;
//# sourceMappingURL=index.js.map