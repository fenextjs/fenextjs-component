import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";

import { InputDateRange, InputDateRangeProps } from "./index";
import { env_log } from "fenextjs-functions/cjs/env_log";

export default {
    title: "Input/InputDateRange",
    component: InputDateRange,
} as Meta;

const Profile: Story<PropsWithChildren<InputDateRangeProps>> = (args) => (
    <InputDateRange {...args}>Test Children</InputDateRange>
);

export const Index = Profile.bind({});
const args : InputDateRangeProps = {
    label:"Date",
    min: new Date(2000,4,2,10,10),
    max: new Date(2001,5,2,14,30),
    placeholder:"Date",
    onChange:(d)=>{
        env_log(d)
    }
}
Index.args = args
