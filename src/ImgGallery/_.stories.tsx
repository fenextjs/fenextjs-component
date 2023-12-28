import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";

import { ImgGallery, ImgGalleryProps } from "./index";

export default {
    title: "Img/ImgGallery",
    component: ImgGallery,
} as Meta;

const Profile: Story<PropsWithChildren<ImgGalleryProps>> = (args) => (
    <ImgGallery {...args} />
);

export const Index = Profile.bind({});
Index.args = {
    imgs: [
        {
            name: "Img",
            src: "https://images3.alphacoders.com/273/27387.jpg",
        },
        {
            name: "Img",
            src: "https://images3.alphacoders.com/409/40949.jpg",
        },
        {
            name: "Img",
            src: "https://images4.alphacoders.com/585/58534.jpg",
        },
        {
            name: "Img",
            src: "https://images3.alphacoders.com/768/76885.jpg",
        },
        {
            name: "Img",
            src: "https://images4.alphacoders.com/672/67298.jpg",
        },
        {
            name: "Img",
            src: "https://images3.alphacoders.com/176/176767.jpg",
        },
        {
            name: "Img",
            src: "https://images.alphacoders.com/145/145923.jpg",
        },
    ],
} as ImgGalleryProps;
