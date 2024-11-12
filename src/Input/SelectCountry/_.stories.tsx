import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import {
    InputSelectCountry,
    InputSelectCountryProps,
} from "./index";

export default {
    title: "Input/InputSelectCountry",
    component: InputSelectCountry,
} as Meta;

const Profile: StoryFn<InputSelectCountryProps> = (args) => (
    <InputSelectCountry {...args}>Test Children</InputSelectCountry>
);

export const Index = Profile.bind({});

const args: InputSelectCountryProps = {
    
};

Index.args = args;
