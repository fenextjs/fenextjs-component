import React, { ReactNode } from "react";
import { createPortal } from "react-dom";

export interface PortalProps {
    container?: Element | DocumentFragment;
    children: ReactNode;
}
export const Portal = ({
    children,
    container = document.body,
}: PortalProps) => {
    return createPortal(<>{children}</>, container);
};
