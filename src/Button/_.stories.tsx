import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Button, ButtonProps } from "./index";

export default {
    title: "Component/Button",
    component: Button,
} as Meta;

const Profile: StoryFn<PropsWithChildren<ButtonProps>> = (args) => (
    <Button {...args}><span>Test Children</span></Button>
);

export const Index = Profile.bind({});
Index.args = {
    // onClick:()=>{alert(1)},
    // onClickDisabled:()=>{alert("disabled")},
    // disabled:true
    invert:false
} as ButtonProps;
