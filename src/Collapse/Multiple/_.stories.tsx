import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";

import { CollapseMultiple, CollapseMultipleProps } from "./index";

export default {
    title: "Collapse/Multiple",
    component: CollapseMultiple,
} as Meta;

const Profile: Story<PropsWithChildren<CollapseMultipleProps>> = (args) => (
    <CollapseMultiple {...args}>Test Children</CollapseMultiple>
);

export const Index = Profile.bind({});

Index.args = {
    name:"name",
    type:"checkbox",
    items:[
        {
            header:"Item 1",
            children:<>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quo tenetur distinctio cupiditate animi, illum officiis, enim quia doloremque totam, sint accusamus impedit! Ducimus hic itaque, minus obcaecati natus consectetur.
            </>
        },
        {
            header:"Item 2",
            children:<>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quo tenetur distinctio cupiditate animi, illum officiis, enim quia doloremque totam, sint accusamus impedit! Ducimus hic itaque, minus obcaecati natus consectetur.
            </>
        },
        {
            header:"Item 3",
            children:<>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quo tenetur distinctio cupiditate animi, illum officiis, enim quia doloremque totam, sint accusamus impedit! Ducimus hic itaque, minus obcaecati natus consectetur.
            </>
        },
    ]
}as CollapseMultipleProps;
