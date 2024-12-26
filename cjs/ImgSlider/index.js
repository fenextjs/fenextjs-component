"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImgSlider = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const Img_1 = require("../Img");
const Steps_1 = require("../Steps");
const PaginationNext_1 = require("fenextjs-svg/cjs/PaginationNext");
const PaginationPre_1 = require("fenextjs-svg/cjs/PaginationPre");
const ImgSlider = ({ className = "", classNameStep = "", imgs, defaultStep = 0, setStep: setStepProps, step: stepProps, ...props }) => {
    const [step__, setStep__] = (0, react_1.useState)(defaultStep);
    const setStep = (e) => {
        setStep__(e);
        setStepProps?.(e);
    };
    const step = (0, react_1.useMemo)(() => stepProps ?? step__, [stepProps, step__]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-img-slider ${className} ` },
            react_1.default.createElement(Steps_1.Steps, { className: classNameStep, items: imgs.map((e, i) => {
                    return {
                        label: e.name ?? "",
                        content: react_1.default.createElement(Img_1.Img, { key: i, ...e }),
                    };
                }), stepPos: "top", step: step, onSetStep: setStep, btnNext: react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(PaginationNext_1.SvgPaginationNext, null)), btnPrev: react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(PaginationPre_1.SvgPaginationPre, null)), useDogs: true, ...props }))));
};
exports.ImgSlider = ImgSlider;
//# sourceMappingURL=index.js.map