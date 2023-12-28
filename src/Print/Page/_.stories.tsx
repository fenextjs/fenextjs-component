import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";

import { PrintPage, PrintPageProps } from "./index";

export default {
    title: "Print/Page",
    component: PrintPage,
} as Meta;

const Profile: Story<PropsWithChildren<PrintPageProps<any>>> = (args) => (
    <PrintPage {...args} />
);

export const Index = Profile.bind({});
Index.args = {
    url: "/",
    data: {},
    onComponent: ({ data,load }) => {
        return (
            <>
                <div>Data:{JSON.stringify(data ?? {})} {load ? "load" : ""}</div>
            </>
        );
    },
} as PrintPageProps<any>;
