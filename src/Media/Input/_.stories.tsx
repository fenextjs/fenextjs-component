import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";

import { MediaInput, MediaInputProps } from "./index";

export default {
    title: "Media/Input",
    component: MediaInput,
} as Meta;

const Profile: Story<PropsWithChildren<MediaInputProps>> = (args) => (
    <MediaInput {...args} />
);

export const Index = Profile.bind({});
Index.args = {
    MediaPageProps: {
        images: [
            {
                src: "https://www.aerocivil.gov.co/Style%20Library/CEA/img/01.jpg",
                name: "img1.jpg",
            },
            {
                src: "https://www.aerocivil.gov.co/Style%20Library/CEA/img/02.jpg",
                name: "img2.jpg",
            },
            {
                src: "https://www.aerocivil.gov.co/Style%20Library/CEA/img/03.jpg",
                name: "img3.jpg",
            },
        ],
        // extraContentImgs:<>
        // aqui
        // </>
    },
    ModalProps:{
        type:"full"
    }
} as MediaInputProps;
