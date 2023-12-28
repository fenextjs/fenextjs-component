import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";

import { Img, ImgProps } from "./index";

export default {
    title: "Img/Img",
    component: Img,
} as Meta;

const Profile: Story<PropsWithChildren<ImgProps>> = (args) => <Img {...args} />;

export const Index = Profile.bind({});
Index.args = {
    name: "Img",
    src: "https://www.aerocivil.gov.co/Style%20Library/CEA/img/01.jpg",
    srcMin768: "https://www.aerocivil.gov.co/Style%20Library/CEA/img/02.jpg",
    srcMin1024: "https://www.aerocivil.gov.co/Style%20Library/CEA/img/03.jpg",
} as ImgProps;

export const WithLayer = Profile.bind({});
WithLayer.args = {
    name: "Img",
    src: "https://www.aerocivil.gov.co/Style%20Library/CEA/img/01.jpg",
    srcMin768: "https://www.aerocivil.gov.co/Style%20Library/CEA/img/02.jpg",
    srcMin1024: "https://www.aerocivil.gov.co/Style%20Library/CEA/img/03.jpg",
    layers:[
        {
            background:"red",
            opacity:.5,
            mixBlendMode:"color"
        }
    ]
} as ImgProps;
