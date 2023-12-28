import React from "react";
import { Story, Meta } from "@storybook/react";

import {
    InputSelectState,
    InputSelectStateProps,
} from "./index";

export default {
    title: "Input/InputSelectState",
    component: InputSelectState,
} as Meta;

const Profile: Story<InputSelectStateProps> = (args) => (
    <InputSelectState {...args}>Test Children</InputSelectState>
);

export const Index = Profile.bind({});

const args: InputSelectStateProps = {
};

Index.args = args;
