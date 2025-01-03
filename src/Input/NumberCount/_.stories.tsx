import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import {  FenextjsValidator } from "fenextjs-validator";

import { InputNumberCount, InputNumberCountProps } from "./index";

export default {
    title: "Input/InputNumberCount",
    component: InputNumberCount,
} as Meta;

const Profile: StoryFn<InputNumberCountProps> = (args) => (
    <InputNumberCount {...args}>Test Children</InputNumberCount>
);

export const Index = Profile.bind({});

const args  : InputNumberCountProps = {
    label:"Label",
    placeholder:"Placeholder",
    min:20,
    max:30000,
    // symbolFinal:"%",
    // symbolInit:"",
    // value:22
    // errorWithIsChange:false,
    // validator:FenextjsValidator()
    // .isRequired()
    // .isNumber()
    // .isMinOrEqual(0, ),
    defaultValue:10022.00,
    // optionsParseNumberDefault:{
    //     minimumFractionDigits:2
    // }
}

Index.args= args

export const UseValidator = Profile.bind({});

const UseValidatorArg  : InputNumberCountProps = {
    label:"Label",
    placeholder:"Placeholder",
    validator:FenextjsValidator().isNumber().isRequired().isMin(4)
}

UseValidator.args= UseValidatorArg