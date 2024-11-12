import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Counter, CounterProps } from "./index";

export default {
    title: "Counter/Counter",
    component: Counter,
} as Meta;

const Profile: StoryFn<PropsWithChildren<CounterProps>> = (args) => (
    <Counter {...args}/>
);

export const Index = Profile.bind({});
Index.args = {
    number:102,
    text:"Number Text"
} as CounterProps;

export const Negative = Profile.bind({});
Negative.args = {
    number:-102.1,
    text:"Number Text"
} as CounterProps;