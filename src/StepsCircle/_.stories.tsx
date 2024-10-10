import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";

import { StepsCircle, StepsCircleProps } from "./index";

export default {
    title: "StepsCircle/StepsCircle",
    component: StepsCircle,
} as Meta;

const Profile: Story<PropsWithChildren<StepsCircleProps>> = (args) => (
    <StepsCircle {...args}/>
);

export const Index = Profile.bind({});
const args : StepsCircleProps = {
    items:[
        {
            children:"Paso 1"
        },
        {
            children:"Paso 2"
        },
        {
            children:"Paso 3"
        },
        {
            children:"Paso 4"
        },
    ]
}
Index.args = args
