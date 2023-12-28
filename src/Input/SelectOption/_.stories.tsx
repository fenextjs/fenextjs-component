import React from "react";
import { Story, Meta } from "@storybook/react";

import { InputSelectOption, InputSelectOptionProps } from "./index";

export default {
    title: "Input/InputSelectOption",
    component: InputSelectOption,
} as Meta;

const Profile: Story<InputSelectOptionProps> = (args) => (
    <InputSelectOption {...args}>Test Children</InputSelectOption>
);

export const Index = Profile.bind({});

const args  : InputSelectOptionProps = {
    id:"1",
    text:"texto",
    children:(<><strong>Children</strong></>)
}

Index.args= args
