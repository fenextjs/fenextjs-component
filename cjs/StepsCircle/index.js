"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepsCircle = void 0;
const tslib_1 = require("tslib");
const Line_1 = require("../Progress/Line");
const react_1 = tslib_1.__importStar(require("react"));
const fenextjs_hook_1 = require("fenextjs-hook");
const StepsCircle = ({ className = "", classNameDisabled = "", classNameItem = "", classNameItemCircle = "", classNameItemContent = "", classNameItemActive = "", classNameItemActiveCircle = "", classNameItemActiveContent = "", classNameProgressLine = {}, defaultStep = undefined, valueStep = undefined, disabled = false, items = [], ...props }) => {
    const { _t } = (0, fenextjs_hook_1.use_T)({ ...props });
    const [step_, setStep] = (0, react_1.useState)(defaultStep ?? 0);
    const step = (0, react_1.useMemo)(() => valueStep ?? step_, [step_, valueStep]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `
                    fenext-steps-circle 
                    fenext-steps-circle-${disabled ? `disabled ${classNameDisabled}` : ""}
                    ${className} 
                `, style: {
                "--nItems": items?.length,
                "--step": step,
            } },
            items?.length && items?.length > 1 && (react_1.default.createElement(Line_1.ProgressLine, { p: (100 / (items?.length - 1)) * step, showP: false, ...classNameProgressLine })),
            items?.map((item, i) => {
                const active = step >= i;
                return (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("div", { className: `
                                    fenext-steps-circle-item
                                    fenext-steps-circle-item-${active ? `active ${classNameItemActive}` : ""}
                                    ${classNameItem}
                                `, onClick: () => {
                            if (disabled) {
                                return;
                            }
                            item?.onClick?.();
                            setStep(i);
                        } },
                        react_1.default.createElement("div", { className: `fenext-steps-circle-item-circle ${classNameItemCircle} ${active ? `${classNameItemActiveCircle}` : ""}` }, i + 1),
                        react_1.default.createElement("div", { className: `fenext-steps-circle-item-content ${classNameItemContent} ${active ? `${classNameItemActiveContent}` : ""}` }, _t(item?.children)))));
            }))));
};
exports.StepsCircle = StepsCircle;
