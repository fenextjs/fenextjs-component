import React from "react";
import { Story, Meta } from "@storybook/react";

import { InputCheckbox, InputCheckboxProps } from "./index";

export default {
    title: "Input/InputCheckbox",
    component: InputCheckbox,
} as Meta;

const Profile: Story<InputCheckboxProps> = (args) => (
    <InputCheckbox {...args}>Test Children</InputCheckbox>
);

export const Index = Profile.bind({});

const args  : InputCheckboxProps = {
    label:"Label",
}

Index.args= args
