"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSelectOptionsPos = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const ReactDOM = tslib_1.__importStar(require("react-dom"));
const useSelectOptionsPos = ({ id, tag = "div", children, target, }) => {
    const [ref, setRef] = (0, react_1.useState)(undefined);
    const uuid = (0, react_1.useMemo)(() => `${Math.ceil(new Date().getTime() * Math.random())}`, []);
    const onLoadRef = () => {
        const ID = id + "-" + uuid;
        let ele = document.getElementById(ID);
        if (!ele) {
            ele = document.createElement(tag);
            ele.id = ID;
            ele.classList.value = `
                fenext-use-select-options-pos
            `;
            document.body.append(ele);
        }
        ele = document.getElementById(ID);
        if (ele) {
            ele.setAttribute("uuid", uuid);
            setRef(ele);
        }
    };
    (0, react_1.useEffect)(onLoadRef, []);
    const onLoadChildren = () => {
        if (ref) {
            ReactDOM.render(react_1.default.createElement(react_1.default.Fragment, null, children), ref);
        }
    };
    (0, react_1.useEffect)(onLoadChildren, [children, ref]);
    const onLoadPos = () => {
        if (ref && target) {
            const bounding = target.getBoundingClientRect();
            ref.style.setProperty("--element-width", `${target.offsetWidth}px`);
            ref.style.setProperty("--element-top", `${bounding.top}px`);
            ref.style.setProperty("--element-left", `${bounding.left}px`);
            ref.style.setProperty("--element-bottom", `${bounding.bottom}px`);
            ref.setAttribute("fenext-direction-pos", bounding.top > window?.innerHeight - bounding.bottom
                ? "top"
                : "bottom");
        }
    };
    (0, react_1.useEffect)(onLoadPos, [target, ref]);
    return {
        ref,
        uuid,
        onLoadPos,
    };
};
exports.useSelectOptionsPos = useSelectOptionsPos;
//# sourceMappingURL=useRender.js.map