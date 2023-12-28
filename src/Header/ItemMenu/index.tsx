import React, { ReactNode, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Collapse } from "../../Collapse/Simple";
import { _TProps } from "fenextjs-interface";
import { _tValidate } from "fenextjs-functions";

/**
 * Properties for the base ItemMenu component.
 */
export interface ItemMenuBaseProps extends _TProps {
    /**
     * Url of page in Menu Item.
     */
    url: string;
    /**
     * Text of page in Menu Item.
     */
    text: ReactNode;
    /**
     * Icon of page in Menu Item.
     */
    icon?: ReactNode;
    /**
     * Sub page in Menu Item.
     */
    subItems?: Omit<ItemMenuProps, "_t">[];
    /**
     * Indicates whether the Collapse is defaultActive for show.
     */
    defaultActive?: boolean;
}

/**
 * Properties for the class of the ItemMenu component.
 */
export interface ItemMenuClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
    /**
     * The class name <a> for the component.
     */
    classNameA?: string;
    /**
     * The class name text for the component.
     */
    classNameText?: string;
    /**
     * The class name icon for the component.
     */
    classNameIcon?: string;
}

/**
 * Properties for the ItemMenu component.
 */
export interface ItemMenuProps extends ItemMenuBaseProps, ItemMenuClassProps {}

export const ItemMenu = ({
    className = "",
    classNameA = "",
    classNameIcon = "",
    classNameText = "",

    text,
    url,
    icon = <></>,
    subItems = [],
    defaultActive = false,
    _t,
}: ItemMenuProps) => {
    const router = useRouter();

    const urlInter = useMemo(() => {
        const nlLink = router?.asPath.split("/");
        const nlUrl = url.split("/");
        const common = nlLink.filter((x) => nlUrl.indexOf(x) !== -1);
        return common.length;
    }, [router?.asPath, url]);

    return (
        <>
            <div className={`fenext-menu-item ${className}`}>
                <Collapse
                    defaultActive={defaultActive}
                    header={
                        <>
                            <Link href={url} legacyBehavior>
                                <a
                                    className={`fenext-menu-item-a ${classNameA} ${
                                        router.asPath.indexOf(url) == 0
                                            ? `fenext-menu-item-a-active fenext-menu-item-a-url-inter-${urlInter}`
                                            : ""
                                    }`}
                                    {...{
                                        ["data-url"]: url,
                                    }}
                                >
                                    <div
                                        className={`fenext-menu-item-a-icon ${classNameIcon}`}
                                    >
                                        {icon}
                                    </div>
                                    <div
                                        className={`fenext-menu-item-a-text ${classNameText}`}
                                    >
                                        {_tValidate(text, _t)}
                                    </div>
                                </a>
                            </Link>
                        </>
                    }
                >
                    {subItems?.map((sub, i) => (
                        <ItemMenu key={i} {...sub} _t={_t} />
                    ))}
                </Collapse>
            </div>
        </>
    );
};
