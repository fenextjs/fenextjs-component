import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Copy, CopyProps } from "./index";

export default {
    title: "Copy/Copy",
    component: Copy,
} as Meta;

const Profile: StoryFn<PropsWithChildren<CopyProps>> = (args) => (
    <Copy {...args}/>
);

export const Index = Profile.bind({});
Index.args = {
    children:<>
        Copy Here
    </>,
    text:"Text for copy"
} as CopyProps;
