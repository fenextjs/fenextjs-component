import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";
import { Date } from "fenextjs-svg/cjs/date";

import { Menu, MenuProps } from "./index";

export default {
    title: "Header/Menu",
    component: Menu,
} as Meta;

const Profile: Story<PropsWithChildren<MenuProps>> = (args) => (
    <Menu {...args}>Test Children</Menu>
);

export const Index = Profile.bind({});
Index.args = {
    items: [
        {
            url: "/?path",
            text: "Text Items 1",
            icon: (
                <>
                    <Date />
                </>
            ),
        },
        {
            url: "/?path=/story",
            text: "Text Items 2",
        },
        {
            url: "/?path=/story/header-menu--index",
            text: "Text Items 3",
            defaultActive: true,
            subItems: [
                {
                    url: "/",
                    text: "Text SubItems 1-1",
                },
                {
                    url: "/",
                    text: "Text SubItems 1-2",
                    defaultActive: true,
                    subItems: [
                        {
                            url: "/",
                            text: "Text SubItems 1-2-1",
                        },
                        {
                            url: "/",
                            text: "Text SubItems 1-2-2",
                        },
                        {
                            url: "/",
                            text: "Text SubItems 1-2-3",
                        },
                    ],
                },
                {
                    url: "/",
                    text: "Text SubItems 1-3",
                },
            ],
        },
        {
            url: "/",
            text: "Text Items 4",
        },
        {
            url: "/",
            text: "Text Items 5",
        },
    ],
} as MenuProps;
