import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { LavaLamp, LavaLampProps } from "./index";

export default {
    title: "LavaLamp/LavaLamp",
    component: LavaLamp,
} as Meta;

const Profile: StoryFn<PropsWithChildren<LavaLampProps>> = (args) => (
    <LavaLamp {...args}/>
);

export const Index = Profile.bind({});
Index.args = {} as LavaLampProps;
