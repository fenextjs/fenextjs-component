import React, { ReactNode } from "react";
export interface PortalProps {
    container?: Element | DocumentFragment;
    children: ReactNode;
}
export declare const Portal: ({ children, container }: PortalProps) => React.JSX.Element;
