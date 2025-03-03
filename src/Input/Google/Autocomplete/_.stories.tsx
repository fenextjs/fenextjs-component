import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { InputGoogleAutocomplete, InputGoogleAutocompleteProps } from "./index";
import { InputGoogleLoadScript } from "../LoadScript";
import { FenextjsValidator } from "fenextjs-validator";
import { AddressGoogle } from "fenextjs-interface";

export default {
    title: "Input/Google/Autocomplete",
    component: InputGoogleAutocomplete,
} as Meta;

const Profile: StoryFn<PropsWithChildren<InputGoogleAutocompleteProps>> = (
    args,
) => (
    <InputGoogleLoadScript>
        <InputGoogleAutocomplete {...args} />
     </InputGoogleLoadScript>
);

export const Index = Profile.bind({});
Index.args = {
    validator:FenextjsValidator<AddressGoogle>()
    .isObject(
        {
            formatted_address: FenextjsValidator()
                .isString('Direccion requerido')
                .isRequired('Direccion requerido'),
        },
        'Direccion requerido',
    )
    .isRequired('Direccion requerido'),
// value:{
//     formatted_address:"test Value"
// }
} as InputGoogleAutocompleteProps;
