"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useModalPos = void 0;
const fenextjs_hook_1 = require("fenextjs-hook");
const react_1 = require("react");
const useModalPos = ({ id, tag = "div", children, }) => {
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
                fenext-use-modal-pos
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
    return {
        ref,
        uuid,
    };
};
exports.useModalPos = useModalPos;
//# sourceMappingURL=useModalPos.js.map