import React from "react";
import { Story, Meta } from "@storybook/react";

import { InputCode, InputCodeProps } from "./index";

export default {
    title: "Input/InputCode",
    component: InputCode,
} as Meta;

const Profile: Story<InputCodeProps> = (args) => (
    <InputCode {...args}>Test Children</InputCode>
);

export const Index = Profile.bind({});

const args  : InputCodeProps = {
    label:"Label",
    placeholder:"Placeholder",
    maxLength:6,
    regExp:/[^0-9]$/,
}

Index.args= args
