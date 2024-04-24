import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";

import { InputCalendarMonth, InputCalendarMonthProps } from "./index";

export default {
    title: "Input/InputCalendarMonth",
    component: InputCalendarMonth,
} as Meta;

const Profile: Story<PropsWithChildren<InputCalendarMonthProps>> = (args) => (
    <InputCalendarMonth {...args}>Test Children</InputCalendarMonth>
);

export const Index = Profile.bind({});
const args : InputCalendarMonthProps = {
    
}
Index.args = args