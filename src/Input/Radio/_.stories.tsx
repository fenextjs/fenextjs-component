import React from "react";
import { Story, Meta } from "@storybook/react";

import { InputRadio, InputRadioProps } from "./index";

export default {
    title: "Input/InputRadio",
    component: InputRadio,
} as Meta;

const Profile: Story<InputRadioProps<any>> = (args) => (
    <InputRadio {...args}>Test Children</InputRadio>
);

export const Index = Profile.bind({});

const args  : InputRadioProps<any> = {
    items:[
        {
            id:"1",
            label:"Label 1",
        },
        {
            id:"2",
            label:"Label 2",
        },
        {
            id:"3",
            label:"Label 3",
        },
    ],
    // value:{
    //     id:"1",
    //     label:"Label 1",
    // },
}

Index.args= args
