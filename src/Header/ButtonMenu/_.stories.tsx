import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { ButtonMenu, ButtonMenuProps } from "./index";

export default {
    title: "Header/ButtonMenu",
    component: ButtonMenu,
} as Meta;

const Profile: StoryFn<PropsWithChildren<ButtonMenuProps>> = (args) => (
    <ButtonMenu {...args}>Test Children</ButtonMenu>
);

export const Index = Profile.bind({});
Index.args = {
    
} as ButtonMenuProps;
