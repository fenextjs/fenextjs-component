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
    defaultValueString:{
        country:"Albania",
        state:"Fier",
        city:"Lagjja e Re"
    }
};

Index.args = args;
