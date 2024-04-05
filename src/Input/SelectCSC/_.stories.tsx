import React from "react";
import { Story, Meta } from "@storybook/react";

import { InputSelectCSC, InputSelectCSCProps } from "./index";

export default {
    title: "Input/InputSelectCSC",
    component: InputSelectCSC,
} as Meta;

const Profile: Story<InputSelectCSCProps> = (args) => (
    <InputSelectCSC {...args}>Test Children</InputSelectCSC>
);

export const Index = Profile.bind({});

const args: InputSelectCSCProps = {
    defaultValue:{
        country:{
            id:-1,
            text:"Colombia",
            code:"CO"
        }
    }
};

Index.args = args;
