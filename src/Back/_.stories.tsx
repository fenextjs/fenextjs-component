import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Back, BackProps } from "./index";

export default {
    title: "Component/Back",
    component: Back,
} as Meta;

const Profile: StoryFn<PropsWithChildren<BackProps>> = (args) => (
    <Back {...args}/>
);

export const Index = Profile.bind({});
Index.args = {};
