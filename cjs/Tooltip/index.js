"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tooltip = void 0;
const tslib_1 = require("tslib");
const fenextjs_functions_1 = require("fenextjs-functions");
const react_1 = tslib_1.__importStar(require("react"));
const ReactDOM = tslib_1.__importStar(require("react-dom"));
const Tooltip = ({ className = "", children, tooltip, positionX = "center", positionY = "top", _t, }) => {
    const ref = (0, react_1.useRef)(null);
    const uuid = (0, react_1.useMemo)(() => `${Math.ceil(new Date().getTime() * Math.random())}`, []);
    const onDefTooltipPos = (target) => {
        const tooltipElement = document.getElementById("fenext-tooltip");
        if (tooltipElement) {
            const bounding = target.getBoundingClientRect();
            tooltipElement.style.setProperty("--element-width", `${tooltipElement.offsetWidth}px`);
            tooltipElement.style.setProperty("--element-height", `${tooltipElement.offsetHeight}px`);
            tooltipElement.style.setProperty("--element-top", `${bounding.top}px`);
            tooltipElement.style.setProperty("--element-left", `${bounding.left}px`);
            tooltipElement.style.setProperty("--element-right", `${bounding.right}px`);
            tooltipElement.style.setProperty("--element-bottom", `${bounding.bottom}px`);
            tooltipElement.style.setProperty("--element-center-x", `${(bounding.right - bounding.left) / 2 + bounding.left}px`);
            tooltipElement.style.setProperty("--element-center-y", `${(bounding.bottom - bounding.top) / 2 + bounding.top}px`);
        }
    };
    const onDefTooltip = (0, react_1.useCallback)((target) => {
        let tooltipElement = document.getElementById("fenext-tooltip");
        if (!tooltipElement) {
            tooltipElement = document.createElement("div");
            tooltipElement.id = "fenext-tooltip";
            document.body.append(tooltipElement);
        }
        tooltipElement = document.getElementById("fenext-tooltip");
        if (tooltipElement) {
            tooltipElement.classList.value = `fenext-tooltip-content fenext-tooltip-content-x-${positionX} fenext-tooltip-content-y-${positionY}`;
            if (!(`${tooltipElement.getAttribute("uuid") ?? ""}` == uuid)) {
                tooltipElement.setAttribute("uuid", uuid);
                ReactDOM.render(react_1.default.createElement(react_1.default.Fragment, null, tooltip), tooltipElement);
            }
            setTimeout(() => {
                onDefTooltipPos(target);
            }, 100);
        }
    }, [positionX, positionY, tooltip]);
    const onShowTooltip = () => {
        if (ref.current) {
            onDefTooltip(ref.current);
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { ref: ref, className: `fenext-tooltip ${className} `, onMouseEnter: onShowTooltip, onClick: onShowTooltip },
            react_1.default.createElement("div", { className: `fenext-tooltip-children` }, (0, fenextjs_functions_1._tValidate)(children, _t)))));
};
exports.Tooltip = Tooltip;
//# sourceMappingURL=index.js.map