import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";

import { Theme, ThemeProps } from "./index";

export default {
    title: "Theme/Theme",
    component: Theme,
} as Meta;

const Profile: Story<PropsWithChildren<ThemeProps>> = (args) => (
    <Theme {...args}/>
);

export const Index = Profile.bind({});
Index.args = {} as ThemeProps;
