import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import {
    InputSelectTimeZone,
    InputSelectTimeZoneProps,
} from "./index";

export default {
    title: "Input/InputSelectTimeZone",
    component: InputSelectTimeZone,
} as Meta;

const Profile: StoryFn<InputSelectTimeZoneProps> = (args) => (
    <InputSelectTimeZone {...args}>Test Children</InputSelectTimeZone>
);

export const Index = Profile.bind({});

const args: InputSelectTimeZoneProps = {
    
};

Index.args = args;
