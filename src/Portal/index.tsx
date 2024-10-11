import React, { ReactNode } from "react";
import { createPortal } from "react-dom";

export interface PortalProps {
    container?: Element | DocumentFragment;
    children: ReactNode;
}
export const Portal = ({
    children,
    container,
}: PortalProps) => {
    if(!window ||  typeof window == 'undefined'){
        return <></>
    }
    return createPortal(<>{children}</>, container ?? document?.body);
};
