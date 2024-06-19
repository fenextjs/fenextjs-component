import React from "react";
import { Story, Meta } from "@storybook/react";

import {
    InputSelectCountryMultiple,
    InputSelectCountryMultipleProps,
} from "./index";

export default {
    title: "Input/InputSelectCountryMultiple",
    component: InputSelectCountryMultiple,
} as Meta;

const Profile: Story<InputSelectCountryMultipleProps> = (args) => (
    <InputSelectCountryMultiple {...args}>Test Children</InputSelectCountryMultiple>
);

export const Index = Profile.bind({});

const args: InputSelectCountryMultipleProps = {
    // onChange:console.log
};

Index.args = args;
