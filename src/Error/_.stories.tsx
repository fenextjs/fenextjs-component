import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";
import {ErrorFenextjs } from "fenextjs-error";

import { ErrorComponent, ErrorComponentProps } from "./index";

export default {
    title: "Error/ErrorComponent",
    component: ErrorComponent,
} as Meta;

const Profile: Story<PropsWithChildren<ErrorComponentProps>> = (args) => (
    <ErrorComponent {...args} />
);

export const Index = Profile.bind({});
Index.args = {
    children: (
        <>
            Error Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, voluptas?
        </>
    ),
} as ErrorComponentProps;

export const WithError = Profile.bind({});
WithError.args = {
    error : new ErrorFenextjs({
            message:"Message error",
            input:"Input",
            data:{
                test:1
            }
    }),
} as ErrorComponentProps;