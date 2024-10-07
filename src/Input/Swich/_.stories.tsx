import React from "react";
import { Story, Meta } from "@storybook/react";

import { InputSwich, InputSwichProps } from "./index";

export default {
    title: "Input/InputSwich",
    component: InputSwich,
} as Meta;

const Profile: Story<InputSwichProps> = (args) => (
    <InputSwich {...args}>Test Children</InputSwich>
);

export const Index = Profile.bind({});

const args  : InputSwichProps = {
    // value:false
}

Index.args= args
