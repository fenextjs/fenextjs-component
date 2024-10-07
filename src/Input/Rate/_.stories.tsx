import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";

import { InputRate, InputRateProps } from "./index";

export default {
    title: "Input/InputRate",
    component: InputRate,
} as Meta;

const Profile: Story<PropsWithChildren<InputRateProps>> = (args) => (
    <InputRate {...args}/>
);

export const Index = Profile.bind({});
Index.args = {
// value:3.2
} as InputRateProps;
