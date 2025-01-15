import React, { useState } from "react";
import { StoryFn, Meta } from "@storybook/react";
import { FenextjsValidator } from "fenextjs-validator";
import { Button } from '../../Button'

import { InputPhone, InputPhoneProps } from "./index";
import {  PhoneProps } from "fenextjs-interface";
// import { parseString_to_Phone } from "fenextjs-functions";

export default {
    title: "Input/InputPhone",
    component: InputPhone,
} as Meta;

const Profile: StoryFn<InputPhoneProps> = (args) => (
    <InputPhone {...args}>Test Children</InputPhone>
);

export const Index = Profile.bind({});

const args: InputPhoneProps = {
    label: "Label",
    // defaultValue:parseString_to_Phone(""),
    // onChange:console.log,
    defaultValue: {
        // country:{
        //     "id": 55,
        //     "text": "Estados Unidos",
        //     "code": "US",
        //     "code_phone": "+1"
        //   }
        code:"+57"
    },
    // value:{
    //     code_country:"US",
    //     code: "+58",
    //     number: "22222",
    //     tel: "+58 22222",
    // },
    // parseCountrys:(d: CountryProps[]) => {
    //     return d.sort((a) => {
    //         if (['Colombia', 'Estados Unidos', 'Brasil'].includes(a.text)) {
    //             return -1;
    //         }
    //         return 0;
    //     });
    // }
    // onChange:console.log,
    // defaultValueJsonString:`{"code":"+57","number":"2123123","tel":"+57 2123123","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/20px-Flag_of_Colombia.svg.png"}`
}

Index.args = args

export const UseValidator = Profile.bind({});

const UseValidatorArg: InputPhoneProps = {
    label: "Label",
    placeholder: "Placeholder",
    validator: FenextjsValidator().setName("phone").isObject({
        code: FenextjsValidator().isString().isRequired(),
        number: FenextjsValidator().isString().isRequired().isMinOrEqual(9),
    }),
}

UseValidator.args = UseValidatorArg




const ProfileValue: StoryFn<InputPhoneProps> = (args) => {
    const [value, setValue] = useState<Partial<PhoneProps>>({

        code_country: "US",
        code: "+1",
        number: "33333",
        tel: "+1 3333",
    });
    return (
        <>
            <InputPhone {...args} value={value} onChange={setValue} />
            <Button onClick={() => {
                setValue({
                    code_country: "US",
                    code: "+58",
                    number: "22222",
                    tel: "+58 22222",
                })
            }}>set value</Button>
        </>
    );
}

export const UseValue = ProfileValue.bind({});

const UseValueArgs: InputPhoneProps = {
    label: "Label",
    // defaultValue:parseString_to_Phone(""),
    // onChange:console.log,
    defaultValue: {
        // country:{
        //     "id": 55,
        //     "text": "Estados Unidos",
        //     "code": "US",
        //     "code_phone": "+1"
        //   }
    },
    // value:{
    //     code_country:"US",
    //     // code: "+58",
    //     // number: "22222",
    //     // tel: "+58 22222",
    // },
    // onChangeJsonString:console.log,
    // defaultValueJsonString:`{"code":"+57","number":"2123123","tel":"+57 2123123","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/20px-Flag_of_Colombia.svg.png"}`
}

UseValue.args = UseValueArgs