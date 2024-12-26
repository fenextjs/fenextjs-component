import React, { ReactNode, useState } from "react";
import { _TProps } from "fenextjs-interface";
import { use_T } from "fenextjs-hook";
import { SvgClose } from "fenextjs-svg";
import { AlertProps } from "fenextjs-interface";

/**
 * Properties for the Alert component.
 */
export interface AlertComponentProps extends _TProps, AlertProps {
    /**
     * The class name for the component.
     */
    className?: string;
    /**
     * The iconClose for the component.
     */
    iconClose?: ReactNode;
    /**
     * The onClose for the component.
     */
    onClose?: () => void;
}

export const Alert = ({
    className = "",
    message,
    iconClose = <SvgClose />,
    type,
    data,
    onClose,
    ...props
}: AlertComponentProps) => {
    const { _t } = use_T({ ...props });
    const [active, setActive] = useState(true)
    return (
        <>
            <div
                className={`
                    fenext-alert 
                    fenext-alert-${type} 
                    fenext-alert-${active?"active":"inactive"} 
                    ${className}
                `}
                data-type={type}
                meta-data={data}
            >
                <div className={`fenext-alert-content`}>{_t(message)}</div>
                <div className={`fenext-alert-close`} onClick={()=>{
                    onClose?.()
                    setActive(false)
                }}>
                    {iconClose}
                </div>
            </div>
        </>
    );
};
