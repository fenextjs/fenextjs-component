import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import {
    InputSelectCountryMultiple,
    InputSelectCountryMultipleProps,
} from "./index";

export default {
    title: "Input/InputSelectCountryMultiple",
    component: InputSelectCountryMultiple,
} as Meta;

const Profile: StoryFn<InputSelectCountryMultipleProps> = (args) => (
    <InputSelectCountryMultiple {...args}>Test Children</InputSelectCountryMultiple>
);

export const Index = Profile.bind({});

const args: InputSelectCountryMultipleProps = {
    // onChange:console.log
};

Index.args = args;
