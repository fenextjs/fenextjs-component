import React, { useState } from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Button } from "../../Button";

import {
    InputSelectCity,
    InputSelectCityProps,
} from "./index";

export default {
    title: "Input/InputSelectCity",
    component: InputSelectCity,
} as Meta;

const Profile: StoryFn<InputSelectCityProps> = (args) => (
    <InputSelectCity {...args}>Test Children</InputSelectCity>
);

export const Index = Profile.bind({});

const args: InputSelectCityProps = {
    // country: {
    //     "id": 144,
    //     "text": "Afganistán",
    //     "code": "AF"
    // },

};

Index.args = args;




const ProfileState: StoryFn<InputSelectCityProps> = (args) => {
    const [data, setData] = useState<any>({

    })
    const onSetCountryState = () => {
        setData({
            country:
            {
                "id": 82,
                "text": "Colombia",
                "code": "CO",
                "code_phone": "+57"
            },
            state: {
                "id": 1700,
                "id_country": 82,
                "text": "Antioquia"
            }
        })
    }

    return (
        <>
            <InputSelectCity {...args}

                country={data?.country}
                state={data?.state}
            />
            <Button onClick={onSetCountryState}>
                onSetCountryState
            </Button>
        </>
    )
}

export const IndexState = ProfileState.bind({});

const argsState: InputSelectCityProps = {

};

IndexState.args = argsState;