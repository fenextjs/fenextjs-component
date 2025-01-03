"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterDate = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const fenextjs_svg_1 = require("fenextjs-svg");
const fenextjs_hook_1 = require("fenextjs-hook");
const Text_1 = require("../../Text");
const DropDown_1 = require("../../DropDown");
const Calendar_1 = require("../../Input/Calendar");
const Swich_1 = require("../../Input/Swich");
const Button_1 = require("../../Button");
const FilterDate = ({ onChange, defaultValue = {}, formatDateOption = {}, className = "", classNameDropDown = {}, classNameCollapse = {}, classNameBtnToday = {}, classNameBtnWeek = {}, classNameTextValue = {}, classNameTextSwich = {}, classNameInputSwich = {}, classNameContentTop = "", classNameLabelSwich = "", classNameClear = "", textValue = "Filtrar por fecha:", textFilterByDate = "Filtar por fecha", textFilterByRange = "Filtar por rango", textBtnToday = "Hoy", textBtnWeek = "Esta Semana", iconTrash = react_1.default.createElement(fenextjs_svg_1.SvgTrash, null), extraListBtn = [], nMonthShow = 2, ...p }) => {
    const { _t } = (0, fenextjs_hook_1.use_T)({ ...p });
    const date = (0, fenextjs_hook_1.useDate)({});
    const { data, onChangeData, onConcatData, setData, ...HOOK } = (0, fenextjs_hook_1.useData)({
        type: "normal",
        ...defaultValue,
    }, {
        onChangeDataAfter: (e) => {
            const date = { ...e };
            if (date.date) {
                date.date.setHours(0);
                date.date.setMinutes(0);
                date.date.setSeconds(0);
                date.date.setMilliseconds(0);
            }
            if (date.dateRange?.[0]) {
                date.dateRange?.[0].setHours(0);
                date.dateRange?.[0].setMinutes(0);
                date.dateRange?.[0].setSeconds(0);
                date.dateRange?.[0].setMilliseconds(0);
            }
            if (date.dateRange?.[1]) {
                date.dateRange?.[1].setHours(0);
                date.dateRange?.[1].setMinutes(0);
                date.dateRange?.[1].setSeconds(0);
                date.dateRange?.[1].setMilliseconds(0);
                date.dateRange?.[1].setDate(date.dateRange?.[1]?.getDate() + 1);
                date.dateRange?.[1].setSeconds(date.dateRange?.[1]?.getSeconds() - 10);
            }
            onChange?.(date);
        },
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `
                    fenext-filter-date  
                    ${className}
                ` },
            react_1.default.createElement(DropDown_1.DropDown, { header: react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(Text_1.Text, { ...classNameTextValue, className: `fenext-filter-date-text-value ${classNameTextValue?.className ?? ""}` },
                        _t(textValue),
                        " ",
                        data.type == "normal" &&
                            data.date != undefined && (react_1.default.createElement(react_1.default.Fragment, null, date.onFormat(formatDateOption, data.date))),
                        data.type == "range" &&
                            data.dateRange != undefined && (react_1.default.createElement(react_1.default.Fragment, null,
                            date.onFormat(formatDateOption, data.dateRange?.[0]),
                            " ",
                            "-",
                            data.dateRange?.[1] != undefined
                                ? date.onFormat(formatDateOption, data.dateRange?.[1])
                                : "")))), ...classNameDropDown, rotateIcon: false, classNameBody: `
                        fenext-filter-date-dropdown-body
                        ${[classNameDropDown.classNameBody]}
                    ` },
                react_1.default.createElement("div", { className: `fenext-filter-date-content-top  ${classNameContentTop}` },
                    react_1.default.createElement("label", { className: `
                                fenext-filter-date-label-swich    
                                ${classNameLabelSwich}
                            ` },
                        react_1.default.createElement(Text_1.Text, { ...classNameTextSwich }, _t(textFilterByDate)),
                        react_1.default.createElement(Swich_1.InputSwich, { value: data.type == "normal", onChange: (e) => {
                                onChangeData("type")(e ? "normal" : "range");
                            }, ...classNameInputSwich })),
                    react_1.default.createElement("label", { className: `
                                fenext-filter-date-label-swich    
                                ${classNameLabelSwich}
                            ` },
                        react_1.default.createElement(Text_1.Text, { ...classNameTextSwich }, _t(textFilterByRange)),
                        react_1.default.createElement(Swich_1.InputSwich, { value: data.type == "range", onChange: (e) => {
                                onChangeData("type")(!e ? "normal" : "range");
                            }, ...classNameInputSwich })),
                    react_1.default.createElement("div", { className: `
                                fenext-filter-date-content-btn    
                            ` },
                        react_1.default.createElement(Button_1.Button, { ...classNameBtnToday, onClick: () => {
                                onConcatData({
                                    type: "normal",
                                    date: new Date(),
                                });
                            }, size: "extra-small" }, _t(textBtnToday)),
                        react_1.default.createElement(Button_1.Button, { ...classNameBtnWeek, onClick: () => {
                                const start = new Date();
                                start.setDate(start.getDate() - start.getDay());
                                const end = new Date();
                                end.setDate(end.getDate() + (6 - end.getDay()));
                                onConcatData({
                                    type: "range",
                                    dateRange: [start, end],
                                });
                            }, size: "extra-small" }, _t(textBtnWeek)),
                        extraListBtn.map((f) => f({
                            data,
                            onChangeData,
                            onConcatData,
                            setData,
                            ...HOOK,
                        })))),
                react_1.default.createElement(Calendar_1.InputCalendar, { onChange: onChangeData("date"), onChangeRange: onChangeData("dateRange"), type: data.type, nMonthShow: nMonthShow, collapseProps: {
                        active: true,
                    }, value: data.date, valueRange: data.dateRange, ...classNameCollapse })),
            ((data?.type == "normal" && data?.date != undefined) ||
                (data?.type == "range" &&
                    data?.dateRange?.[0] != undefined &&
                    data?.dateRange?.[1] != undefined)) && (react_1.default.createElement("div", { className: `
                            fenext-filter-date-clear
                            ${classNameClear}
                        `, onClick: () => {
                    setData({
                        type: "normal",
                    });
                } }, iconTrash)))));
};
exports.FilterDate = FilterDate;
//# sourceMappingURL=index.js.map