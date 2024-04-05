"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSelectOptionsPos = void 0;
const fenextjs_hook_1 = require("fenextjs-hook");
const react_1 = require("react");
const useSelectOptionsPos = ({ id, tag = "div", children, target, }) => {
    const [ref, setRef] = (0, react_1.useState)(undefined);
    const { uuid } = (0, fenextjs_hook_1.useRender)({
        children,
        ref,
    });
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
        return () => {
            if (ele) {
                ele.outerHTML = "";
            }
        };
    };
    (0, react_1.useEffect)(onLoadRef, []);
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
//# sourceMappingURL=useSelectOptionsPos.js.map