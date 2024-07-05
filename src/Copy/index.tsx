import React, { ReactNode } from "react";
import {
    NotificationDataProps,
    useNotification,
} from "fenextjs-hook/cjs/useNotification";
import { RequestResultTypeProps, _TProps } from "fenextjs-interface";
import { use_T } from "fenextjs-hook";
/**
 * Properties for the base Copy component.
 */
export interface CopyBaseProps extends _TProps {
    /**
     * The text for the copy.
     */
    text?: string;
    /**
     * The children for the component.
     */
    children?: ReactNode;
    /**
     * The onClickForCopy for the component.
     */
    onClickForCopy?: (text: string) => void;
    /**
     * The notification for the component.
     */
    notification?: NotificationDataProps;
}

/**
 * Properties for the class of the Copy component.
 */
export interface CopyClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}

/**
 * Properties for the Copy component.
 */
export interface CopyProps extends CopyBaseProps, CopyClassProps {}

export const Copy = ({
    className = "",

    children,
    text = "",
    onClickForCopy,
    notification = {
        message: "Copy",
        type: RequestResultTypeProps.OK,
    },
    ...props
}: CopyProps) => {
    const {_t} = use_T({...props})
    const { pop } = useNotification({});

    const onCopy = () => {
        navigator.clipboard.writeText(text);
        onClickForCopy?.(text);
        if (notification) {
            pop(notification);
        }
    };

    return (
        <>
            <div className={`fenext-copy ${className} `} onClick={onCopy}>
                {_t(children)}
            </div>
        </>
    );
};
