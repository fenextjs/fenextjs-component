import React from "react";
import { Story, Meta } from "@storybook/react";

import { InputTextSelect, InputTextSelectProps } from "./index";

export default {
    title: "Input/InputTextSelect",
    component: InputTextSelect,
} as Meta;

const Profile: Story<InputTextSelectProps> = (args) => (
    <InputTextSelect {...args}>Test Children</InputTextSelect>
);

export const Index = Profile.bind({});

const args  : InputTextSelectProps = {
    label:"Label",
    options:new Array(10).fill(1).map((e,i)=>{
        const n =  e * i + 1
        return  {
            id: n,
            text: `Option ${n}`,
            children: <>Option {n}</>,
            // img:"https://www.aerocivil.gov.co/Style%20Library/CEA/img/01.jpg",
            icon:<>
                <img src="https://www.aerocivil.gov.co/Style%20Library/CEA/img/01.jpg"/>
            </>
        }
    }),
}

Index.args= args
