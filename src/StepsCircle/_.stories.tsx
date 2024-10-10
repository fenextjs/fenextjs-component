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
            children:"Buscar el Plugin"
        },
        {
            children:"Instalar Plugin"
        },
        {
            children:"Conectar con Xell"
        },
        {
            children:"Seleccione la tienda a Conecta"
        },
    ]
}

Index.args = args
