import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";

import { ModalBase, ModalBaseProps } from "./index";

export default {
    title: "Modal/ModalBase",
    component: ModalBase,
} as Meta;

const Profile: Story<PropsWithChildren<ModalBaseProps>> = (args) => (
    <ModalBase {...args} />
);

export const Index = Profile.bind({});
Index.args = {
    active: true,
    children: (
        <>
            <h1>Title</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias error illo iusto, ex esse ullam aliquam officia
                praesentium labore reprehenderit nostrum quidem exercitationem
                blanditiis est illum pariatur veritatis magni corporis!
            </p>
        </>
    ),
} as ModalBaseProps;
