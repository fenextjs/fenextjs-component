import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";

import { DesignBox, DesignBoxProps } from "./index";

export default {
    title: "Design/Box",
    component: DesignBox,
} as Meta;

const Profile: Story<PropsWithChildren<DesignBoxProps>> = (args) => (
    <DesignBox {...args}/>
);

export const Index = Profile.bind({});
const args : DesignBoxProps = {}
Index.args = args
