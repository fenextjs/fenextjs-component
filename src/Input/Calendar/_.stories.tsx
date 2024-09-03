import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";

import { InputCalendar, InputCalendarProps } from "./index";
import { FenextjsValidator } from "fenextjs-validator";

export default {
    title: "Input/InputCalendar",
    component: InputCalendar,
} as Meta;

const Profile: Story<PropsWithChildren<InputCalendarProps>> = (args) => (
    <InputCalendar {...args}>Test Children</InputCalendar>
);

const n = new Date()
n.setDate(n.getDate() + 10)

export const Index = Profile.bind({});
const args : InputCalendarProps = {
    label:"Label",
    placeholder:"Placeholder",
    type:"normal",
    nMonthShow:3,
    defaultValue:new Date(),
    defaultValueRange:[new Date(),n]
    // value:new Date()
}
Index.args = args

export const Range = Profile.bind({});
const argsRange : InputCalendarProps = {
    ...args,
    type:"range",
}
Range.args = argsRange

const d = new Date()
d.setMonth(d.getMonth()+2)
export const MinMax = Profile.bind({});
const argsMinMax : InputCalendarProps = {
   ...args,
    min:new Date(),
    max:d
}
MinMax.args = argsMinMax

export const Validator = Profile.bind({});
const argsValidator : InputCalendarProps = {
   ...args,
   type:"normal",
   validator:FenextjsValidator().isDate().isMin(new Date()).isMax(d),
//    errorWithIsChange:false
}
Validator.args = argsValidator


export const ValidatorRange = Profile.bind({});
const argsValidatorRange : InputCalendarProps = {
   ...args,
   type:"range",
   validator:FenextjsValidator().isArray(argsValidator.validator)
}
ValidatorRange.args = argsValidatorRange