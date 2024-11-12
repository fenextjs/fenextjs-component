import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { User, UserComponentProps } from "./index";
import { UserRoleProps, UserStatusProps } from "fenextjs-interface/cjs/User";

export default {
    title: "User/User",
    component: User,
} as Meta;

const Profile: StoryFn<PropsWithChildren<UserComponentProps>> = (args) => (
    <User {...args}/>
);

export const Index = Profile.bind({});

const args :UserComponentProps = {

    user:{
        id:"1",
        img:{
            src:"https://www.aerocivil.gov.co/Style%20Library/CEA/img/02.jpg",
        },
        dateCreate:new Date(),
        email:"email@gmail.com",
        name:"Jhon Doe",
        role:UserRoleProps.CUSTOMER,
        status:UserStatusProps.VERIFY,
        token:"1",
        

    }
}

Index.args = args

export const NotImg = Profile.bind({});
NotImg.args = {
    user:{
        id:"1",
        dateCreate:new Date(),
        email:"email@gmail.com",
        name:"Jhon Doe",
        role:UserRoleProps.CUSTOMER,
        status:UserStatusProps.VERIFY,
        token:"1",
        

    }
} as UserComponentProps;