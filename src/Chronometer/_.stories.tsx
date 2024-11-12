import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Chronometer, ChronometerProps } from "./index";

export default {
    title: "Chronometer/Chronometer",
    component: Chronometer,
} as Meta;

const Profile: StoryFn<PropsWithChildren<ChronometerProps>> = (args) => (
    <Chronometer {...args}/>
);

export const Index = Profile.bind({});
Index.args = {} as ChronometerProps;
