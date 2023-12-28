import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";
import {  FenextjsValidator } from "fenextjs-validator";

import { InputDate, InputDateProps } from "./index";

export default {
    title: "Input/InputDate",
    component: InputDate,
} as Meta;

const Profile: Story<PropsWithChildren<InputDateProps>> = (args) => (
    <InputDate {...args}>Test Children</InputDate>
);

export const Index = Profile.bind({});
const args : InputDateProps = {
    label:"Date",
    min: new Date(2000,4,2,10,10),
    max: new Date(2001,5,2,14,30),
    placeholder:"Date",
}
Index.args = args

export const UseValidator = Profile.bind({});

const UseValidatorArg  : InputDateProps = {
    label:"Label",
    placeholder:"Placeholder",
    validator:FenextjsValidator().isDate().isRequired().isMax(new Date("2023-07-30T01:10:33.162Z"))
}

UseValidator.args= UseValidatorArg