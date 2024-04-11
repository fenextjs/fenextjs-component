import React from "react";
import { Story, Meta } from "@storybook/react";

import { InputSelectCSC, InputSelectCSCProps } from "./index";

export default {
    title: "Input/InputSelectCSC",
    component: InputSelectCSC,
} as Meta;

const Profile: Story<InputSelectCSCProps> = (args) => (
    <InputSelectCSC {...args}>Test Children</InputSelectCSC>
);

export const Index = Profile.bind({});

const args: InputSelectCSCProps = {
    defaultValue: {
        country: {
            id: -1,
            text: "Colombia",
            code: "CO",
        },
    },
    // onChangeJsonString: console.log,
    // defaultValueJsonString: {
    //     country:
    //         '{"id":82,"text":"Colombia","code":"CO","img":"https://country-state-city-nextjs.vercel.app/country/82_colombia/img.png"}',
    //     state: '{"id":1700,"id_country":82,"text":"Antioquia"}',
    //     city: '{"id":465167,"id_state":1700,"text":"Medellín","id_country":82,"nameAve":"MEDELLIN(ANTIOQUIA)"}',
    // },
};

Index.args = args;
