import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";

import { Breadcrumb, BreadcrumbProps } from "./index";

export default {
    title: "Breadcrumb/Breadcrumb",
    component: Breadcrumb,
} as Meta;

const Profile: Story<PropsWithChildren<BreadcrumbProps>> = (args) => (
    <Breadcrumb {...args}/>
);

export const Index = Profile.bind({});
Index.args = {
    links:[
        {
            href:"#",
            children:"Home",
        },
        {
            href:"#",
            children:"Users",
        },
        {
            href:"#",
            children:"Juan",
            onClick:()=>{
                alert("Alert onClick Juan")
            }
        },
        {
            href:"#",
            children:"Edit",
        },
    ]
} as BreadcrumbProps;
