import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { DesignTypography, DesignTypographyProps } from "./index";

export default {
    title: "Design/Typography",
    component: DesignTypography,
} as Meta;

const Profile: StoryFn<PropsWithChildren<DesignTypographyProps>> = (args) => (
    <DesignTypography {...args}/>
);

export const Index = Profile.bind({});
const args : DesignTypographyProps = {}
Index.args = args
