import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { ProgressLine, ProgressLineProps } from "./index";

export default {
    title: "Progress/ProgressLine",
    component: ProgressLine,
} as Meta;

const Profile: StoryFn<PropsWithChildren<ProgressLineProps>> = (args) => (
    <ProgressLine {...args} />
);

export const Index = Profile.bind({});
Index.args = {
    p: 45,
} as ProgressLineProps;
