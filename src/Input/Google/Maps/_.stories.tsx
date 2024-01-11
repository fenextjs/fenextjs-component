import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";

import { InputGoogleMaps, InputGoogleMapsProps } from "./index";

export default {
    title: "Input/Google/Maps",
    component: InputGoogleMaps,
} as Meta;

const Profile: Story<PropsWithChildren<InputGoogleMapsProps>> = (
    args,
) => (
        <InputGoogleMaps {...args} />
);

export const Index = Profile.bind({});
Index.args = {
    markers:[
        {
            position:{
                lat: 6.2476376,
                lng: -75.56581530000001,
            }
        },
        {
            position:{
                lat: 6.3476376,
                lng: -75.56581530000001,
            }
        },
        {
            position:{
                lat: 6.5476376,
                lng: -75.56581530000001,
            }
        },
        {
            position:{
                lat: 6.7476376,
                lng: -75.56581530000001,
            }
        }, 
    ],
    showDirectionsWaypoints:false,
    useLoadDirectionsWithMarker:true
} as InputGoogleMapsProps;
