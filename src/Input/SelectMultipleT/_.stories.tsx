import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { InputSelectMultipleT, InputSelectMultipleTProps } from "./index";

export default {
    title: "Input/InputSelectMultipleT",
    component: InputSelectMultipleT,
} as Meta;

const Profile: StoryFn<InputSelectMultipleTProps<any>> = (args) => (
    <InputSelectMultipleT {...args}>Test Children</InputSelectMultipleT>
);

export const Index = Profile.bind({});

const args: InputSelectMultipleTProps<any> = {
    label: "Select MultipleT",
    placeholder: "Select MultipleT",
    options:[],
    onParse:e=>e
};

Index.args = args;

