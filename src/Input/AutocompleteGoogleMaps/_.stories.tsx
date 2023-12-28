import React from "react";
import { Story, Meta } from "@storybook/react";

import { InputAutocompleteGoogleMaps, InputAutocompleteGoogleMapsProps } from "./index";

export default {
    title: "Input/InputAutocompleteGoogleMaps",
    component: InputAutocompleteGoogleMaps,
} as Meta;

const Profile: Story<InputAutocompleteGoogleMapsProps> = (args) => (
    <InputAutocompleteGoogleMaps {...args}>Test Children</InputAutocompleteGoogleMaps>
);

export const Index = Profile.bind({});

const args  : InputAutocompleteGoogleMapsProps = {
    label:"Label",
}

Index.args= args
