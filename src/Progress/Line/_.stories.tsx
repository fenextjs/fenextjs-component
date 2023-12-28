import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";

import { ProgressLine, ProgressLineProps } from "./index";

export default {
    title: "Progress/ProgressLine",
    component: ProgressLine,
} as Meta;

const Profile: Story<PropsWithChildren<ProgressLineProps>> = (args) => (
    <ProgressLine {...args} />
);

export const Index = Profile.bind({});
Index.args = {
    p: 45,
} as ProgressLineProps;
