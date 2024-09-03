import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";

import { InputCalendar, InputCalendarProps } from "./index";

export default {
    title: "Input/InputCalendar",
    component: InputCalendar,
} as Meta;

const Profile: Story<PropsWithChildren<InputCalendarProps>> = (args) => (
    <InputCalendar {...args}>Test Children</InputCalendar>
);

export const Index = Profile.bind({});
const args : InputCalendarProps = {
    label:"Label",
    placeholder:"Placeholder",
    type:"range",
    nMonthShow:3
}
Index.args = args
const d = new Date()
d.setMonth(d.getMonth()+2)
export const MinMax = Profile.bind({});
const argsMinMax : InputCalendarProps = {
    label:"Label",
    placeholder:"Placeholder",
    type:"range",
    nMonthShow:3,
    min:new Date(),
    max:d
}
MinMax.args = argsMinMax