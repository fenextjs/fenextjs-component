import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { PrintIframe, PrintIframeProps } from "./index";

export default {
    title: "Print/Iframe",
    component: PrintIframe,
} as Meta;

const Profile: StoryFn<PropsWithChildren<PrintIframeProps<any>>> = (args) => (
    <PrintIframe {...args} />
);

export const Index = Profile.bind({});
Index.args = {
    url: "/",
    data: {},
    onComponent: ({ loader }) => {
        return (
            <>
                <div>aqui {loader ? "loader" : ""}</div>
            </>
        );
    },
} as PrintIframeProps<any>;
