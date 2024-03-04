import React from "react";
import { Story, Meta } from "@storybook/react";

import { InputSelectMultiple, InputSelectMultipleProps } from "./index";

export default {
    title: "Input/InputSelectMultiple",
    component: InputSelectMultiple,
} as Meta;

const Profile: Story<InputSelectMultipleProps> = (args) => (
    <InputSelectMultiple {...args}>Test Children</InputSelectMultiple>
);

export const Index = Profile.bind({});

const args: InputSelectMultipleProps = {
    label: "Select Multiple",
    placeholder: "Select Multiple",
    datalist:"listOption",
    // create :{
    //     id:"create",
    //     text:"Create"
    // },
    options: [
        {
            id: "1",
            text: "Option 1",
            children: <>Option 1</>,
            img:"https://www.aerocivil.gov.co/Style%20Library/CEA/img/01.jpg"
        },
        {
            id: "2",
            text: "Option 2",
            children: <>Option 2</>,
        },
        {
            id: "3",
            text: "Option 3",
            children: <>Option 3</>,
        },
    ],
    onChangeValidate(e) {
        if(e.length == 3){
            throw "No Puedes seleccionar 3 elementos"
        }
    },
    typeSelectStyle:"checkbox"
};

Index.args = args;
