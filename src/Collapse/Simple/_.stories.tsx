import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Collapse, CollapseProps } from "./index";

export default {
    title: "Collapse/Simple",
    component: Collapse,
} as Meta;

const Profile: StoryFn<PropsWithChildren<CollapseProps>> = (args) => (
    <Collapse {...args}>Test Children</Collapse>
);

export const Index = Profile.bind({});

Index.args = {
    header:<>
        Collapse
    </>,
    // useActiveForShowChildren:true
}as CollapseProps;
