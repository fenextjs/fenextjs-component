"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSelectOptionsPos = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const ReactDOM = tslib_1.__importStar(require("react-dom"));
const useSelectOptionsPos = ({ idSelectOptions, children, target, }) => {
    const [ref, setRef] = (0, react_1.useState)(undefined);
    const onLoadRef = () => {
        const ID = `fenext-select${idSelectOptions ? `-${idSelectOptions}` : ""}`;
        let ele = document.getElementById(ID);
        if (!ele) {
            ele = document.createElement("div");
            ele.id = ID;
            ele.classList.value = `
                fenext-use-select-options-pos
            `;
            document.body.append(ele);
        }
        ele = document.getElementById(ID);
        if (ele) {
            setRef(ele);
        }
    };
    (0, react_1.useEffect)(onLoadRef, []);
    const onLoadPos = (0, react_1.useCallback)(() => {
        if (ref && target) {
            const bounding = target.getBoundingClientRect();
            ReactDOM.render(react_1.default.createElement(react_1.default.Fragment, null, children), ref);
            ref.style.setProperty("--element-width", `${target.offsetWidth}px`);
            ref.style.setProperty("--element-top", `${bounding.top}px`);
            ref.style.setProperty("--element-left", `${bounding.left}px`);
            ref.style.setProperty("--element-bottom", `${bounding.bottom}px`);
            ref.setAttribute("fenext-direction-pos", bounding.top > window?.innerHeight - bounding.bottom
                ? "top"
                : "bottom");
        }
    }, [children, target, ref]);
    const onLoadChildren = (0, react_1.useCallback)(() => {
        if (ref) {
            ReactDOM.render(react_1.default.createElement(react_1.default.Fragment, null, children), ref);
        }
    }, [children, ref]);
    return {
        ref,
        onLoadPos,
        onLoadChildren,
    };
};
exports.useSelectOptionsPos = useSelectOptionsPos;
//# sourceMappingURL=index.js.map