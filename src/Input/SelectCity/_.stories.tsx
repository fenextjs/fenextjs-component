import React from "react";
import { Story, Meta } from "@storybook/react";

import {
    InputSelectCity,
    InputSelectCityProps,
} from "./index";

export default {
    title: "Input/InputSelectCity",
    component: InputSelectCity,
} as Meta;

const Profile: Story<InputSelectCityProps> = (args) => (
    <InputSelectCity {...args}>Test Children</InputSelectCity>
);

export const Index = Profile.bind({});

const args: InputSelectCityProps = {
    country:{
        "id": 144,
        "text": "Afganistán",
        "code": "AF"
      },
      
};

Index.args = args;
