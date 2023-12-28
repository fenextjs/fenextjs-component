import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";

import { LoaderSpinner, LoaderSpinnerProps } from "./index";

export default {
    title: "Loader/Spinner",
    component: LoaderSpinner,
} as Meta;

const Profile: Story<PropsWithChildren<LoaderSpinnerProps>> = (args) => (
    <LoaderSpinner {...args}>Test Children</LoaderSpinner>
);

export const Index = Profile.bind({});
Index.args = {};
