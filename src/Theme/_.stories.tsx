import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Theme, ThemeProps } from "./index";

export default {
    title: "Theme/Theme",
    component: Theme,
} as Meta;

const Profile: StoryFn<PropsWithChildren<ThemeProps>> = (args) => (
    <Theme {...args}/>
);

export const Index = Profile.bind({});
Index.args = {} as ThemeProps;
