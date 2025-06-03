import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { InputSelectMultiple, InputSelectMultipleProps } from "./index";
import { FV } from "fenextjs-validator";

export default {
    title: "Input/InputSelectMultiple",
    component: InputSelectMultiple,
} as Meta;

const Profile: StoryFn<InputSelectMultipleProps> = (args) => (
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
    // disabled:true,
    nItems:11,
    typeSelect:"div",
    
    maxLengthShowOptions:10,
    defaultValue:[
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
    ],
    options: [
        {
            id: "1",
            text: "Option 1",
            // children: <>Option 1</>,
            disabled:true,
            img:"https://www.aerocivil.gov.co/Style%20Library/CEA/img/01.jpg"
        },
        {
            id: "2",
            text: "Option 2",
            // children: <>Option 2</>,
            img:"https://www.aerocivil.gov.co/Style%20Library/CEA/img/01.jpg"
        },
        {
            id: "3",
            text: "Option 3",
            // children: <>Option 3</>,
        },
        {
            id: "4",
            text: "Option 4",
            // children: <>Option 4</>,
        },
        {
            id: "5",
            text: "Option 5",
            // children: <>Option 5</>,
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
        {
            id: "8",
            text: "Option 8",
        },
        {
            id: "9",
            text: "Option 9",
        },
        {
            id: "10",
            text: "Option 10",
        },
        {
            id: "11",
            text: "Option 11",
        },
    ],
    typeSelectStyle:"box",
    typeSelectMultipleStyle:"checkbox",
};

Index.args = args;



export const CustomOptionsSelected = Profile.bind({});

const CustomOptionsSelectedArgs: InputSelectMultipleProps = {
    ...args,
    CustomOptionsSelected:({text})=>{
        return <>
            Custom Option = {text}
        </>
    }
};

CustomOptionsSelected.args = CustomOptionsSelectedArgs;




export const WithValdidator = Profile.bind({});

const WithValdidatorArgs: InputSelectMultipleProps = {
    ...args,
    defaultValue:[],
    validator:FV().isArray().isMinOrEqual(3,"minimo 3 elementos").isMaxOrEqual(5,"maximo 5 elementos")
};

WithValdidator.args = WithValdidatorArgs;