import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";

import { ItemMenu, ItemMenuProps } from "./index";

export default {
    title: "Header/ItemMenu",
    component: ItemMenu,
} as Meta;

const Profile: Story<PropsWithChildren<ItemMenuProps>> = (args) => (
    <ItemMenu {...args}>Test Children</ItemMenu>
);

export const Index = Profile.bind({});
Index.args = {
    url:"/",
    text:"Text Menu",


} as ItemMenuProps

export const SubItems = Profile.bind({});
SubItems.args = {
    url:"/",
    text:"Text SubItems",
    subItems:[
        {
            url:"/",
            text:"Text SubItems 1",
        },
        {
            url:"/",
            text:"Text SubItems 2",
        },
        {
            url:"/",
            text:"Text SubItems 3",
            subItems:[
                {
                    url:"/",
                    text:"Text SubItems 1-1",
                },
                {
                    url:"/",
                    text:"Text SubItems 1-2",
                },
                {
                    url:"/",
                    text:"Text SubItems 1-3",
                },
            ] 
        },
    ]  

} as ItemMenuProps