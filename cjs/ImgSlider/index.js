"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImgSlider = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const Img_1 = require("../Img");
const Steps_1 = require("../Steps");
const Pagination_1 = require("fenextjs-svg/cjs/Pagination");
const ImgSlider = ({ className = "", imgs, setStep: setStepProps, step: stepProps, _t, }) => {
    const [step__, setStep__] = (0, react_1.useState)(0);
    const setStep = (e) => {
        setStep__(e);
        setStepProps?.(e);
    };
    const step = (0, react_1.useMemo)(() => stepProps ?? step__, [stepProps, step__]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-img-slider ${className} ` },
            react_1.default.createElement(Steps_1.Steps, { items: imgs.map((e, i) => {
                    return {
                        label: e.name ?? "",
                        content: react_1.default.createElement(Img_1.Img, { key: i, ...e, _t: _t }),
                    };
                }), stepPos: "top", step: step, useStep: true, onSetStep: setStep, btnNext: react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(Pagination_1.PaginationNext, null)), btnPrev: react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(Pagination_1.PaginationPre, null)), useDogs: true, _t: _t }))));
};
exports.ImgSlider = ImgSlider;
//# sourceMappingURL=index.js.map