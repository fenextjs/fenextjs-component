import React, { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export interface PortalProps {
    container?: Element | DocumentFragment;
    children: ReactNode;
}
export const Portal = ({ children, container }: PortalProps) => {
    const [load, setLoad] = useState(false);
    useEffect(() => {
        setLoad(true);
    }, []);

    if (!load) {
        return <></>;
    }
    return createPortal(<>{children}</>, container ?? document?.body);
};
