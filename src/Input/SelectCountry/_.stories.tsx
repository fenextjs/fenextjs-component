import React from "react";
import { Story, Meta } from "@storybook/react";

import {
    InputSelectCountry,
    InputSelectCountryProps,
} from "./index";

export default {
    title: "Input/InputSelectCountry",
    component: InputSelectCountry,
} as Meta;

const Profile: Story<InputSelectCountryProps> = (args) => (
    <InputSelectCountry {...args}>Test Children</InputSelectCountry>
);

export const Index = Profile.bind({});

const args: InputSelectCountryProps = {
};

Index.args = args;
