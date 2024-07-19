import React from "react";
import { Story, Meta } from "@storybook/react";

import { InputSelectCSC, InputSelectCSCProps } from "./index";
import { FenextjsValidator } from "fenextjs-validator";
import { CityProps, CountryProps, StateProps } from "fenextjs-interface";

export default {
    title: "Input/InputSelectCSC",
    component: InputSelectCSC,
} as Meta;

const Profile: Story<InputSelectCSCProps> = (args) => (
    <InputSelectCSC {...args}>Test Children</InputSelectCSC>
);

export const Index = Profile.bind({});



const XellValidatorCountry = FenextjsValidator<CountryProps>()
    .isObject(
        {
            id: FenextjsValidator()
                .isNumber('País requerido')
                .isRequired('País requerido'),
        },
        'País requerido',
    )
    .isRequired('País requerido');

const XellValidatorState = FenextjsValidator<StateProps>()
    .isObject(
        {
            id: FenextjsValidator()
                .isNumber('Estado requerido')
                .isRequired('Estado requerido'),
        },
        'Estado requerido',
    )
    .isRequired('Estado requerido');

const XellValidatorCity = FenextjsValidator<CityProps>()
    .isObject(
        {
            id: FenextjsValidator()
                .isNumber('Ciudad requerida')
                .isRequired('Ciudad requerida'),
        },
        'Ciudad requerida',
    )
    .isRequired('Ciudad requerida');

const args: InputSelectCSCProps = {
    defaultValue: {
        "city": {
            "id": 452468,
            "id_state": 1726,
            "text": "Bogotá",
            "id_country": 82,
            "nameAve": "BOGOTA(CUNDINAMARCA)"
        },
        "country": {
            "id": 82,
            "text": "Colombia",
            "code": "CO",
            "code_phone": "+57",
            "img": "https://xell-lib-csc-bucket.s3.amazonaws.com/country/82_colombia/img.png"
        },
        "state": {
            "id": 1726,
            "id_country": 82,
            "text": "Cundinamarca"
        }
    },
    errorWithIsChange: false,
    converterInSearchWithMaxLenght:true,
    country: {
        validatorData: XellValidatorCountry,

    },
    state: {
        validatorData: XellValidatorState
    },
    city: {
        validatorData: XellValidatorCity
    },
};

Index.args = args;
