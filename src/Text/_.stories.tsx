import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Text, TextProps } from "./index";

export default {
    title: "Text/Text",
    component: Text,
} as Meta;

const Profile: StoryFn<PropsWithChildren<TextProps>> = (args) => (
    <Text {...args} />
);

export const Index = Profile.bind({});
Index.args = {
    children: "Text",
} as TextProps;
