"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientProvider = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_query_1 = require("@tanstack/react-query");
const QueryClientProvider = ({ children }) => {
    const queryClient = new react_query_1.QueryClient();
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_query_1.QueryClientProvider, { client: queryClient }, children)));
};
exports.QueryClientProvider = QueryClientProvider;
