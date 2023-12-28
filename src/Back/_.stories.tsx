import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";

import { Back, BackProps } from "./index";

export default {
    title: "Component/Back",
    component: Back,
} as Meta;

const Profile: Story<PropsWithChildren<BackProps>> = (args) => (
    <Back {...args}/>
);

export const Index = Profile.bind({});
Index.args = {};
