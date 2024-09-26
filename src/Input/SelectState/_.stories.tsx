import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";

import {
    InputSelectState,
    InputSelectStateProps,
} from "./index";
import { Button } from "../../Button";

export default {
    title: "Input/InputSelectState",
    component: InputSelectState,
} as Meta;

const Profile: Story<InputSelectStateProps> = (args) => (
    <InputSelectState {...args}>Test Children</InputSelectState>
);

export const Index = Profile.bind({});

const args: InputSelectStateProps = {
};

Index.args = args;





const ProfileState: Story<InputSelectStateProps> = (args) => {
    const [data, setData] = useState<any>({

    })
    const onSetCountry = () => {
        setData({
            country:
            {
                "id": 82,
                "text": "Colombia",
                "code": "CO",
                "code_phone": "+57"
            },
        })
    }

    return (
        <>
            <InputSelectState {...args}

                country={data?.country}
            />
            <Button onClick={onSetCountry}>
                onSetCountry
            </Button>
        </>
    )
}

export const IndexState = ProfileState.bind({});

const argsState: InputSelectStateProps = {

};

IndexState.args = argsState;