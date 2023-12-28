import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";

import { LoaderLine, LoaderLineProps } from "./index";

export default {
    title: "Loader/Line",
    component: LoaderLine,
} as Meta;

const Profile: Story<PropsWithChildren<LoaderLineProps>> = (args) => (
    <LoaderLine {...args}>Test Children</LoaderLine>
);

export const Index = Profile.bind({});
Index.args = {};
