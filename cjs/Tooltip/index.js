"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tooltip = void 0;
const tslib_1 = require("tslib");
const Portal_1 = require("../Portal");
const fenextjs_hook_1 = require("fenextjs-hook");
const react_1 = tslib_1.__importStar(require("react"));
const Tooltip = ({ className = "", children, tooltip, positionX = "center", positionY = "top", ...props }) => {
    const { _t } = (0, fenextjs_hook_1.use_T)({ ...props });
    const ref = (0, react_1.useRef)(null);
    const refTooltipContent = (0, react_1.useRef)(null);
    const [configTooltip, setConfigTooltip] = (0, react_1.useState)(undefined);
    const onShowTooltip = () => {
        const target = ref?.current;
        const tooltipElement = refTooltipContent?.current;
        if (tooltipElement) {
            const bounding = target.getBoundingClientRect();
            setConfigTooltip({
                "--element-width": `${tooltipElement.offsetWidth}px`,
                "--element-height": `${tooltipElement.offsetHeight}px`,
                "--element-top": `${bounding.top}px`,
                "--element-left": `${bounding.left}px`,
                "--element-right": `${bounding.right}px`,
                "--element-bottom": `${bounding.bottom}px`,
                "--element-center-x": `${(bounding.right - bounding.left) / 2 + bounding.left}px`,
                "--element-center-y": `${(bounding.bottom - bounding.top) / 2 + bounding.top}px`,
            });
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Portal_1.Portal, null,
            react_1.default.createElement("div", { ref: refTooltipContent, className: `
                        fenext-tooltip-content 
                        fenext-tooltip-content-x-${positionX} 
                        fenext-tooltip-content-y-${positionY} 
                        fenext-tooltip-content-${configTooltip ? "active" : "inactive"}
                    `, onMouseEnter: onShowTooltip, onMouseLeave: () => {
                    setConfigTooltip(undefined);
                }, style: configTooltip }, tooltip)),
        react_1.default.createElement("div", { ref: ref, className: `fenext-tooltip ${className} `, onMouseEnter: onShowTooltip, onClick: onShowTooltip, onMouseLeave: () => {
                setConfigTooltip(undefined);
            } },
            react_1.default.createElement("div", { className: `fenext-tooltip-children` }, _t(children)))));
};
exports.Tooltip = Tooltip;
//# sourceMappingURL=index.js.map