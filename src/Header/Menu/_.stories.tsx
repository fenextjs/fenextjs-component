import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";
import { SvgDate } from "fenextjs-svg/cjs/Date";

import { Menu, MenuProps } from "./index";

export default {
    title: "Header/Menu",
    component: Menu,
} as Meta;

const Profile: StoryFn<PropsWithChildren<MenuProps>> = (args) => (
    <Menu {...args}>Test Children</Menu>
);

export const Index = Profile.bind({});
Index.args = {
    items: [
        {
            url: "/123",
            text: "Text Items 1",
            icon: (
                <>
                    <SvgDate />
                </>
            ),
        },
        {
            url: "/?path=/story/header-menu--index",
            text: "Text Items 2",
        },
        {
            url: "/?path=/story/header-menu--index",
            text: "Text Items 3",
            // defaultActive: true,
            isLink:false,
            subItems: [
                {
                    url: "/?path=/story/header-menu--index",
                    text: "Text SubItems 1-1",
                },
                {
                    url: "/123",
                    text: "Text SubItems 1-2",
                    // defaultActive: true,
                    subItems: [
                        {
                            url: "/123",
                            text: "Text SubItems 1-2-1",
                        },
                        {
                            url: "/123",
                            text: "Text SubItems 1-2-2",
                        },
                        {
                            url: "/asdasdasdasd",
                            text: "Text SubItems 1-2-3",
                        },
                    ],
                },
                {
                    url: "/123",
                    text: "Text SubItems 1-3",
                },
            ],
        },
        {
            url: "/123",
            text: "Text Items 4",
        },
        {
            url: "/123",
            text: "Text Items 5",
        },
    ],
} as MenuProps;
