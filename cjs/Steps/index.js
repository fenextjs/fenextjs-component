"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Steps = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const useDocumentEvent_1 = require("fenextjs-hook/cjs/useDocumentEvent");
const Button_1 = require("../Button");
const fenextjs_functions_1 = require("fenextjs-functions");
const Steps = ({ className = "", classNameContentItems = "", classNameContentSteps = "", classNameListSteps = "", classNameItem = "", classNameItemActive = "", classNameStep = "", classNameStepActive = "", classNameStepCircle = "", classNameStepLabel = "", classNameContentBtn = "", classNameBtn = "", classNameBtnNext = "", classNameBtnPrev = "", defaultStep = 0, step = undefined, useStep = false, items = [], btnNext = "Next", btnPrev = "Previous", disabledBtnNext = false, disabledBtnPrev = false, onNext, onPrev, stepPos = "left", showCurrentStepNStep = false, useArrowKey = true, useDogs = false, onSetStep, _t, }) => {
    const ref = (0, react_1.useRef)(null);
    const [loader, setLoader] = (0, react_1.useState)(false);
    const parseCurrentStep = (0, react_1.useCallback)((n) => {
        return Math.max(0, Math.min(n, items.length - 1));
    }, [items]);
    const [currentStep___, setCurrentStep__] = (0, react_1.useState)(defaultStep);
    const setCurrentStep = (e) => {
        setCurrentStep__(e);
        onSetStep?.(e);
    };
    const currentStep = (0, react_1.useMemo)(() => parseCurrentStep(useStep ? step ?? currentStep___ : currentStep___), [currentStep___, useStep, step]);
    const getNumberSum = (0, react_1.useCallback)((a) => {
        return parseCurrentStep(currentStep + a);
    }, [currentStep]);
    const onMoveStep = async (add, fn) => {
        if (ref &&
            ref?.current &&
            ref?.current?.classList?.contains("fenext-steps-not-loader")) {
            setLoader(true);
            try {
                const n = getNumberSum(add);
                if (fn) {
                    await fn(n);
                }
                setCurrentStep(n);
            }
            finally {
                setLoader(false);
            }
            setLoader(false);
        }
    };
    const onNext_ = async () => {
        if (disabledBtnNext) {
            return;
        }
        await onMoveStep(1, onNext);
    };
    const onPrev_ = async () => {
        if (disabledBtnPrev) {
            return;
        }
        await onMoveStep(-1, onPrev);
    };
    const keydown = (0, react_1.useCallback)((e) => {
        if (!useArrowKey) {
            return;
        }
        if (e.keyCode == 37) {
            onPrev_();
        }
        if (e.keyCode == 39) {
            onNext_();
        }
    }, [currentStep, useArrowKey, disabledBtnNext, disabledBtnPrev]);
    (0, useDocumentEvent_1.useDocumentEvent)({
        keydown,
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { ref: ref, className: `
                    fenext-steps
                    fenext-steps-${loader ? "loader" : "not-loader"}
                    fenext-steps-pos-${stepPos}
                    fenext-steps-pos-${stepPos}
                    ${className} 
                    ` },
            react_1.default.createElement("div", { className: `fenext-steps-content-steps ${classNameContentSteps} ` },
                react_1.default.createElement("div", { className: `fenext-steps-list-steps ${classNameListSteps} ` }, items.map((item, i) => {
                    return (react_1.default.createElement("div", { key: i, className: `fenext-steps-step ${classNameStep} ${currentStep == i
                            ? `fenext-steps-step-active ${classNameStepActive}`
                            : ""}
                                        fenext-steps-step-status-${item?.status ?? "none"} 
                                    ` },
                        react_1.default.createElement("div", { className: `fenext-steps-step-circle ${classNameStepCircle} ` }, item.icon ?? i + 1),
                        react_1.default.createElement("div", { className: `fenext-steps-step-label ${classNameStepLabel} ` }, (0, fenextjs_functions_1._tValidate)(item.label, _t))));
                }))),
            react_1.default.createElement("div", { className: `fenext-steps-content-items ${classNameContentItems} ` }, items.map((item, i) => {
                return (react_1.default.createElement("div", { key: i, className: `fenext-steps-item ${classNameItem} ${currentStep == i
                        ? `fenext-steps-item-active ${classNameItemActive}`
                        : ""} ` }, (0, fenextjs_functions_1._tValidate)(item.content, _t)));
            })),
            react_1.default.createElement("div", { className: `fenext-steps-content-btn ${classNameContentBtn} ` },
                currentStep != 0 && (react_1.default.createElement(Button_1.Button, { className: `fenext-steps-btn fenext-steps-btn-prev ${classNameBtn} ${classNameBtnPrev}`, disabled: disabledBtnPrev, onClick: onPrev_, loader: loader, _t: _t }, btnPrev)),
                showCurrentStepNStep && items.length > 1 && (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("div", { className: "fenext-steps-current-step" },
                        currentStep + 1,
                        " / ",
                        items.length))),
                useDogs && items.length > 1 && (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("div", { className: "fenext-steps-content-dog" }, new Array(items.length).fill(1).map((e, i) => {
                        return (react_1.default.createElement(react_1.default.Fragment, null,
                            react_1.default.createElement("div", { key: e * i, onClick: () => {
                                    setCurrentStep(i);
                                }, className: `
                                                fenext-steps-dog
                                                ${currentStep == i
                                    ? "fenext-steps-dog-current"
                                    : ""}    

                                                ` })));
                    })))),
                currentStep != items.length - 1 && (react_1.default.createElement(Button_1.Button, { className: `fenext-steps-btn fenext-steps-btn-next ${classNameBtn} ${classNameBtnNext}`, disabled: disabledBtnNext, onClick: onNext_, loader: loader, _t: _t }, btnNext))))));
};
exports.Steps = Steps;
//# sourceMappingURL=index.js.map