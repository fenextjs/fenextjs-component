import React from "react";
import { Story, Meta } from "@storybook/react";
import {
    InputSelectT,
    InputSelectTProps,
} from "./index";

export default {
    title: "Input/InputSelectT",
    component: InputSelectT,
} as Meta;

const Profile: Story<InputSelectTProps<any>> = (args) => (
    <InputSelectT {...args}>Test Children</InputSelectT>
);

export const Index = Profile.bind({});

const args: InputSelectTProps<any> = {
    id: "SelectT",
    name: "SelectT",
    label: "SelectT",
    placeholder: "SelectT",
    datalist: "listOption",
    onParse:(e=>{
        return {
            id:"1",
            text:"test",
            data:e
        }
    }),
    options: [
        {
            id: "1",
            text: "Option 1",
            children: <>Option 1</>,
            disabled:true,
            img:"https://www.aerocivil.gov.co/Style%20Library/CEA/img/01.jpg"
        },
        {
            id: "2",
            text: "Option 2",
            children: <>Option 2</>,
            img:"https://www.aerocivil.gov.co/Style%20Library/CEA/img/01.jpg"
        },
        {
            id: "3",
            text: "Option 3",
            children: <>Option 3</>,
        },
        {
            id: "4",
            text: "Option 4",
            children: <>Option 4</>,
        },
        {
            id: "5",
            text: "Option 5",
            children: <>Option 5</>,
        },
        {
            id: "6",
            text: "Option 6",
            children: <>Option 6</>,
        },
        {
            id: "7",
            text: "Option 7",
            children: <>Option 7</>,
        },
    ],
};

Index.args = args;


