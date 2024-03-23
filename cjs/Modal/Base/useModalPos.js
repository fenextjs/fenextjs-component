"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useModalPos = void 0;
const tslib_1 = require("tslib");
const fenextjs_hook_1 = require("fenextjs-hook");
const react_1 = tslib_1.__importStar(require("react"));
class ContextProvider extends react_1.default.Component {
    getChildContext() {
        return this.context;
    }
    render() {
        return this.props.children;
    }
}
const useModalPos = ({ id, tag = "div", children, }) => {
    const [ref, setRef] = (0, react_1.useState)(undefined);
    const { uuid } = (0, fenextjs_hook_1.useRender)({
        // children,
        children: (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(ContextProvider, null, children))),
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