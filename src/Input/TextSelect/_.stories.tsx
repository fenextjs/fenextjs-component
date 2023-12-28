import React from "react";
import { Story, Meta } from "@storybook/react";

import { InputTextSelect, InputTextSelectProps } from "./index";

export default {
    title: "Input/InputTextSelect",
    component: InputTextSelect,
} as Meta;

const Profile: Story<InputTextSelectProps> = (args) => (
    <InputTextSelect {...args}>Test Children</InputTextSelect>
);

export const Index = Profile.bind({});

const args  : InputTextSelectProps = {
    label:"Label",
    options:[
        
    ]
}

Index.args= args
