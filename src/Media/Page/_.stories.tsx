import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { MediaPage, MediaPageProps } from "./index";

export default {
    title: "Media/Page",
    component: MediaPage,
} as Meta;

const Profile: StoryFn<PropsWithChildren<MediaPageProps>> = (args) => (
    <MediaPage {...args}/>
);

export const Index = Profile.bind({});
Index.args = {
    images:[
        {
            src:"https://www.aerocivil.gov.co/Style%20Library/CEA/img/01.jpg",
            name:"img1.jpg"
        },
        {
            src:"https://www.aerocivil.gov.co/Style%20Library/CEA/img/02.jpg",
            name:"img2.jpg"
        },
        {
            src:"https://www.aerocivil.gov.co/Style%20Library/CEA/img/03.jpg",
            name:"img3.jpg"
        },
    ]
} as MediaPageProps;
