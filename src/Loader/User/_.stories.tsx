import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { LoaderUser, LoaderUserProps } from "./index";

export default {
    title: "Loader/User",
    component: LoaderUser,
} as Meta;

const Profile: StoryFn<PropsWithChildren<LoaderUserProps>> = (args) => (
    <LoaderUser {...args}>Test Children</LoaderUser>
);

export const Index = Profile.bind({});
Index.args = {};
