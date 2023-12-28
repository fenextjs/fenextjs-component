import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";

import { DropDown, DropDownProps } from "./index";

export default {
    title: "DropDown/DropDown",
    component: DropDown,
} as Meta;

const Profile: Story<PropsWithChildren<DropDownProps>> = (args) => (
    <DropDown {...args} />
);

export const Index = Profile.bind({});
Index.args = {
    header: <>Button DropDown</>,
    children: (
        <>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            temporibus animi facere dolore repudiandae ea consequuntur deserunt.
            Iure, natus officiis! Necessitatibus voluptate iste, eum dolor quis
            cum ipsa nobis reprehenderit!
            <hr />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            temporibus animi facere dolore repudiandae ea consequuntur deserunt.
            Iure, natus officiis! Necessitatibus voluptate iste, eum dolor quis
            cum ipsa nobis reprehenderit!
        </>
    ),
} as DropDownProps;

export const Left = Profile.bind({});
Left.args = {
    header: <>Button DropDown</>,
    children: <>It is the content</>,
} as DropDownProps;

const ProfileRight: Story<PropsWithChildren<DropDownProps>> = (args) => (
    <div
        style={{
            display: "flex",
            justifyContent: "flex-end",
        }}
    >
        <DropDown {...args} />
    </div>
);
export const Right = ProfileRight.bind({});
Right.args = {
    header: <>Button DropDown</>,
    children: <>It is the content</>,
} as DropDownProps;


const ProfileUp: Story<PropsWithChildren<DropDownProps>> = (args) => (
    <div
        style={{
            display: "flex",
            alignItems:"flex-end",
            minHeight:"100dvh"
        }}
    >
        <DropDown {...args} />
    </div>
);
export const Up = ProfileUp.bind({});
Up.args = {
    header: <>Button DropDown</>,
    children: <>It is the content</>,
} as DropDownProps;


const ProfileUpRight: Story<PropsWithChildren<DropDownProps>> = (args) => (
    <div
        style={{
            display: "flex",
            alignItems:"flex-end",
            justifyContent: "flex-end",
            minHeight:"100dvh"
        }}
    >
        <DropDown {...args} />
    </div>
);
export const UpRight = ProfileUpRight.bind({});
UpRight.args = {
    header: <>Button DropDown</>,
    children: <>It is the content</>,
} as DropDownProps;