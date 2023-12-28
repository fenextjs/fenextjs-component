import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";

import { InputGoogleAutocomplete, InputGoogleAutocompleteProps } from "./index";
import { InputGoogleLoadScript } from "../LoadScript";

export default {
    title: "Input/Google/Autocomplete",
    component: InputGoogleAutocomplete,
} as Meta;

const Profile: Story<PropsWithChildren<InputGoogleAutocompleteProps>> = (
    args,
) => (
    <InputGoogleLoadScript>
        <InputGoogleAutocomplete {...args} />
    </InputGoogleLoadScript>
);

export const Index = Profile.bind({});
Index.args = {} as InputGoogleAutocompleteProps;
