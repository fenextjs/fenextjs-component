import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { ProgressCircle, ProgressCircleProps } from "./index";

export default {
    title: "Progress/ProgressCircle",
    component: ProgressCircle,
} as Meta;

const Profile: StoryFn<PropsWithChildren<ProgressCircleProps>> = (args) => (
    <ProgressCircle {...args} />
);

export const Index = Profile.bind({});
Index.args = {
    p: 45,
} as ProgressCircleProps;
