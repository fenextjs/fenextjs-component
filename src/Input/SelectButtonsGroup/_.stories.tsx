import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { InputSelectButtonsGroup, InputSelectButtonsGroupProps } from "./index";
import { FV } from "fenextjs-validator";
import { ErrorFenextjs } from "fenextjs-error/cjs/Fenextjs";

export default {
    title: "Input/InputSelectButtonsGroup",
    component: InputSelectButtonsGroup,
} as Meta;

const Profile: StoryFn<InputSelectButtonsGroupProps> = (args) => (
    <InputSelectButtonsGroup {...args}>Test Children</InputSelectButtonsGroup>
);

export const Index = Profile.bind({});
const OPTIONS = [
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
]

const args: InputSelectButtonsGroupProps<string> = {
    label: "Select Buttons Group",
    defaultValue:["Option 1",],
    options: OPTIONS.map(e=>e.text),
    onParse:e=>({
        id:e ?? '',
        text: e ?? '',
        data: e
    }),
    // onChange:console.log
};

Index.args = args;




export const Multiple = Profile.bind({});

const MultipleArgs: InputSelectButtonsGroupProps = {
    ...args,
    defaultValue:["Option 1","Option 2"],
    isMultiple:true,
};

Multiple.args = MultipleArgs;

export const WithValdidator = Profile.bind({});

const WithValdidatorArgs: InputSelectButtonsGroupProps = {
    ...args,
    isMultiple:true,
    validator:FV().isArray(
        FV().isString("string").isCustom(e=>e == "Option 1" ? new ErrorFenextjs({message:"No puedes seleccionar esta opcion",}):true)
    ).isMinOrEqual(3,"minimo 3 elementos").isMaxOrEqual(5,"maximo 5 elementos")
};

WithValdidator.args = WithValdidatorArgs;