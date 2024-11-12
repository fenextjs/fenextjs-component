import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { DesignBox, DesignBoxProps } from "./index";

export default {
    title: "Design/Box",
    component: DesignBox,
} as Meta;

const Profile: StoryFn<PropsWithChildren<DesignBoxProps>> = (args) => (
    <DesignBox {...args}/>
);

export const Index = Profile.bind({});
const args : DesignBoxProps = {
    // onChangeStyles:console.log
    
}
Index.args = args
