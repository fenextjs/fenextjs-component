import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Loader, LoaderProps } from "./index";

export default {
    title: "Loader/Loader",
    component: Loader,
} as Meta;

const Profile: StoryFn<PropsWithChildren<LoaderProps>> = (args) => (
    <Loader {...args}>Test Children</Loader>
);

export const Index = Profile.bind({});
Index.args = {};
