import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { InputCheckbox, InputCheckboxProps } from "./index";

export default {
    title: "Input/InputCheckbox",
    component: InputCheckbox,
} as Meta;

const Profile: StoryFn<InputCheckboxProps> = (args) => (
    <InputCheckbox {...args}>Test Children</InputCheckbox>
);

export const Index = Profile.bind({});

const args  : InputCheckboxProps = {
    label:"Label",
    // onActiveValue:console.log,
    // onInactiveValue:console.log,
    valueActive:"SI",
    valueInactive:"NO",
    // value:false
}

Index.args= args
