"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollapseMultiple = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const Simple_1 = require("../Simple");
const CollapseMultiple = ({ classNameMultiple = "", name = "", items = [], type = "checkbox", defaultActive = [], active: activeProps = undefined, ...props }) => {
    const [_active, setActive] = (0, react_1.useState)([defaultActive].flat(2));
    const active = (0, react_1.useMemo)(() => [activeProps ?? _active].flat(2), [activeProps, _active]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-collapse-multiple ${classNameMultiple}` }, items.map((item, i) => (react_1.default.createElement(Simple_1.Collapse, { key: i, name: name, type: type, active: active.includes(i), onChange: (e) => {
                setActive((old) => {
                    if (e) {
                        if (type == "checkbox") {
                            return [...old, i];
                        }
                        if (type == "radio") {
                            return [i];
                        }
                    }
                    else {
                        if (type == "checkbox") {
                            return [...old].filter((a) => a != i);
                        }
                        if (type == "radio") {
                            return [];
                        }
                    }
                    return old;
                });
            }, ...props, ...item }))))));
};
exports.CollapseMultiple = CollapseMultiple;
//# sourceMappingURL=index.js.map