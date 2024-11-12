import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { LoaderLine, LoaderLineProps } from "./index";

export default {
    title: "Loader/Line",
    component: LoaderLine,
} as Meta;

const Profile: StoryFn<PropsWithChildren<LoaderLineProps>> = (args) => (
    <LoaderLine {...args}>Test Children</LoaderLine>
);

export const Index = Profile.bind({});
Index.args = {};
