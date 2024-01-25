import React, { ReactNode, useCallback, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Collapse } from "../../Collapse/Simple";
import { _TProps } from "fenextjs-interface";
import { _tValidate } from "fenextjs-functions";
import { Arrow } from "fenextjs-svg/cjs/Arrow";

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
    /**
     * iconArrow of Collapse.
     * @default ArrowCollapse
     */
    iconArrow?: ReactNode;
    /**
     * nameNumber of Collapse.
     * @default 1
     */
    nameNumber?: number;
    /**
     * type of collapse.
     */
    typeCollapse?: "radio" | "checkbox";
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
    iconArrow = <Arrow />,
    nameNumber = 1,
    typeCollapse,
    _t,
}: ItemMenuProps) => {
    const router = useRouter();

    const urlInter = useMemo(() => {
        const nlLink = router?.asPath.split("/");
        const nlUrl = url.split("/");
        const common = nlLink.filter((x) => nlUrl.indexOf(x) !== -1);
        return common.length;
    }, [router?.asPath, url]);

    const urlActive = useCallback(
        (url: Omit<ItemMenuProps, "_t">["url"]) => {
            return (
                router?.asPath?.indexOf?.(url) == 0 &&
                ((router?.asPath != "/" && url != "/") ||
                    (url == "/" && router?.asPath == "/"))
            );
        },
        [router?.asPath],
    );

    const subItemsActive = useCallback(
        (sub: Omit<ItemMenuProps, "_t">[]) => {
            return sub?.some((e) => {
                return (
                    urlActive(e?.url) ||
                    (e?.subItems && subItemsActive(e?.subItems))
                );
            });
        },
        [router?.asPath],
    );

    const contentSubItemAtive = useMemo(
        () => subItemsActive(subItems),
        [subItems, router?.asPath],
    );

    return (
        <>
            <div className={`fenext-menu-item ${className}`}>
                <Collapse
                    key={router?.asPath ?? ""}
                    name={`fenext-menu-item-${nameNumber}`}
                    defaultActive={defaultActive || contentSubItemAtive}
                    type={typeCollapse}
                    header={
                        <>
                            <Link href={url} legacyBehavior>
                                <a
                                    className={`fenext-menu-item-a ${classNameA} ${
                                        urlActive(url)
                                            ? `fenext-menu-item-a-active fenext-menu-item-a-url-inter-${urlInter}`
                                            : ""
                                    }`}
                                    data-url={url}
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
                    iconArrow={iconArrow}
                >
                    {subItems?.map((sub, i) => (
                        <ItemMenu
                            key={i}
                            {...sub}
                            _t={_t}
                            iconArrow={sub?.iconArrow ?? iconArrow}
                            nameNumber={nameNumber + 1}
                        />
                    ))}
                </Collapse>
            </div>
        </>
    );
};
