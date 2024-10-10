"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepsCircle = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const StepsCircle = ({ className = "", defaultStep = undefined, valueStep = undefined, disable = false, items = [], }) => {
    const [step_, setStep] = (0, react_1.useState)(defaultStep ?? 0);
    const step = (0, react_1.useMemo)(() => valueStep ?? step_, [step_, valueStep]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `
                    fenext-steps-circle 
                    fenext-steps-circle-${disable ? "disable" : ""}
                    ${className} 
                `, style: {
                "--nItems": items?.length + 1,
                "--step": step,
            } }, items?.map((item, i) => {
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: `
                                    fenext-steps-circle-item
                                    fenext-steps-circle-item-${step >= i ? "active" : ""}
                                `, onClick: () => {
                        if (disable) {
                            return;
                        }
                        item?.onClick?.();
                        setStep(i);
                    } },
                    react_1.default.createElement("div", { className: `fenext-steps-circle-item-circle` }, i + 1),
                    react_1.default.createElement("div", { className: "fenext-steps-circle-item-content" }, item?.children))));
        }))));
};
exports.StepsCircle = StepsCircle;
//# sourceMappingURL=index.js.map