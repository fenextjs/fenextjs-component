import React, { ReactNode } from "react";
import { Modal } from "../Modal";
import { Button, ButtonProps } from "../Button";
import { Title, TitleProps } from "../Title";

import { SvgWhatsappBox } from "fenextjs-svg/cjs/Whatsapp";
import { SvgFacebookBox } from "fenextjs-svg/cjs/Facebook";
import { SvgXBox } from "fenextjs-svg/cjs/X";
import { SvgEmailBox } from "fenextjs-svg/cjs/Email";
import { SvgCopyBox } from "fenextjs-svg/cjs/Copy";
import { Copy } from "../Copy";
import { _TProps } from "fenextjs-interface";
import { use_T } from "fenextjs-hook";

export type ShareListType = "whatsapp" | "facebook" | "x" | "email" | "copy";

/**
 * Properties for the base Share component.
 */
export interface ShareBaseProps extends _TProps {
    /**
     * ButtonProps for the component.
     */
    ButtonProps?: ButtonProps;

    /**
     * TitleProps for the component.
     */
    TitleProps?: TitleProps;
    /**
     * share text for the component.
     */
    share?: string;
    /**
     * share text for the component.
     */
    shareList?: ShareListType[];
    /**
     * show share text for copy in the component.
     */
    showShareCopy?: boolean;
}

/**
 * Properties for the class of the Share component.
 */
export interface ShareClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}

/**
 * Properties for the Share component.
 */
export interface ShareProps extends ShareBaseProps, ShareClassProps {}

export const Share = ({
    className = "",

    share = "",

    ButtonProps = {
        children: "Share",
    },
    TitleProps = {
        children: "Share",
        tag: "h2",
    },
    shareList = ["whatsapp", "facebook", "x", "email", "copy"],
    showShareCopy = false,
    ...props
}: ShareProps) => {
    const { _t } = use_T({ ...props });
    const LISTSHARE: {
        [id in ShareListType]: {
            urlShare: string;
            icon: ReactNode;
        };
    } = {
        whatsapp: {
            urlShare: "https://web.whatsapp.com/share?url=",
            icon: <SvgWhatsappBox />,
        },
        facebook: {
            urlShare: "https://www.facebook.com/sharer/sharer.php?u=",
            icon: <SvgFacebookBox />,
        },
        x: {
            urlShare: "https://x.com/share?text=",
            icon: <SvgXBox />,
        },
        email: {
            urlShare: "mailto:?body=",
            icon: <SvgEmailBox />,
        },
        copy: {
            urlShare: "",
            icon: <SvgCopyBox />,
        },
    };

    return (
        <>
            <div className={`fenext-share ${className} `}>
                <Modal
                    ElementActionModalActive={
                        <>
                            <Button {...ButtonProps} />
                        </>
                    }
                >
                    <Title {...TitleProps} _t={_t} />

                    <div className="fenext-share-items">
                        {shareList.map((e, i) => {
                            const key = e as ShareListType;
                            const item = LISTSHARE[key];

                            if (key === "copy") {
                                return (
                                    <>
                                        <Copy
                                            key={i}
                                            className={`fenext-share-item fenext-share-item-${key}`}
                                            text={share}
                                            _t={_t}
                                        >
                                            {item.icon}
                                        </Copy>
                                    </>
                                );
                            }

                            return (
                                <a
                                    href={`${item.urlShare}${share}`}
                                    key={i}
                                    className={`fenext-share-item fenext-share-item-${key}`}
                                    target="_blank"
                                >
                                    {_t(item.icon)}
                                </a>
                            );
                        })}
                    </div>
                    {showShareCopy && (
                        <div className="fenext-share-copy">
                            <Copy
                                className={`fenext-share-copy`}
                                text={share}
                                _t={_t}
                            >
                                {share}
                            </Copy>
                        </div>
                    )}
                </Modal>
            </div>
        </>
    );
};
