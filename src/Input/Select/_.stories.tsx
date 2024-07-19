import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";
import { FenextjsValidator} from "fenextjs-validator";
import {sleep} from 'fenextjs-functions';

import { LayoutGridMenuTopLeft } from "../../Layout/Grid/GridMenuTopLeft";
import { Modal } from "../../Modal";
import { Button } from "../../Button";
import {
    InputSelect,
    InputSelectItemOptionBaseProps,
    InputSelectProps,
} from "./index";
import { ErrorInputRequired } from "fenextjs-error";

export default {
    title: "Input/InputSelect",
    component: InputSelect,
} as Meta;

const Profile: Story<InputSelectProps> = (args) => (
    <InputSelect {...args}>Test Children</InputSelect>
);

export const Index = Profile.bind({});


const args: InputSelectProps = {
    id: "select",
    name: "select",
    label: "Select",
    placeholder: "Select",
    datalist: "listOption",
    useTOption:true,
    // _t:e=>"x",
    options: [
        {
            id: "1",
            text: "Option 1",
            // children: <>Option 1</>,
            disabled:true,
            img:"https://www.aerocivil.gov.co/Style%20Library/CEA/img/01.jpg"
        },
        {
            id: "2",
            text: "Option 2",
            // children: <>Option 2</>,
            img:"https://www.aerocivil.gov.co/Style%20Library/CEA/img/01.jpg"
        },
        {
            id: "3",
            text: "Option 3",
            // children: <>Option 3</>,
        },
        {
            id: "4",
            text: "Option 4",
            // children: <>Option 4</>,
        },
        {
            id: "5",
            text: "Option 5",
            // children: <>Option 5</>,
        },
        {
            id: "6",
            text: "Option 6",
            children: <>Option 6</>,
        },
        {
            id: "7",
            text: "Option 7",
            children: <>Option 7</>,
        },
    ],
    create: {
        id: "create",
        text: "Create",
    },
    onCreate: () => alert("Create"),

    onChangeValidate: (e: InputSelectItemOptionBaseProps | undefined) => {
        if (!e) {
            throw new ErrorInputRequired();
        }
    },
};

Index.args = args;



export const WithValidator = Profile.bind({});

const WithValidatorArgs: InputSelectProps = {
    ...args,
    errorWithIsChange:false,
    validator:FenextjsValidator().isObject({
        id:FenextjsValidator().isString().isRequired()
    }),
    onChangeValidate:undefined
};

WithValidator.args = WithValidatorArgs;


const InOveflow: Story<InputSelectProps> = (args) => (
    <div
        style={{
            background: "#04004a",
            height: "100dvh",
        }}
        className="overflow-auto"
    >
        <h1>Box with Overflow</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            possimus voluptates mollitia accusamus assumenda commodi ea velit
            quibusdam id officiis. Aperiam autem quas suscipit repudiandae
            molestias quasi id adipisci aliquam.
        </p>
        <h1>Box with Overflow</h1>
        <div
            style={{
                background: "#04004a",
                height: "80dvh",
            }}
            className="overflow-auto"
        >
            <h1>Box with Overflow</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                possimus voluptates mollitia accusamus assumenda commodi ea
                velit quibusdam id officiis. Aperiam autem quas suscipit
                repudiandae molestias quasi id adipisci aliquam.
            </p>
            <h1>Box with Overflow</h1>
            <h1>Box with Overflow</h1>
            <h1>Box with Overflow</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                possimus voluptates mollitia accusamus assumenda commodi ea
                velit quibusdam id officiis. Aperiam autem quas suscipit
                repudiandae molestias quasi id adipisci aliquam.
            </p>
            <h1>Box with Overflow</h1>
            <h1>Box with Overflow</h1>
            <h1>Box with Overflow</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                possimus voluptates mollitia accusamus assumenda commodi ea
                velit quibusdam id officiis. Aperiam autem quas suscipit
                repudiandae molestias quasi id adipisci aliquam.
            </p>
            <h1>Box with Overflow</h1>
            <h1>Box with Overflow</h1>
            <h1>Box with Overflow</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                possimus voluptates mollitia accusamus assumenda commodi ea
                velit quibusdam id officiis. Aperiam autem quas suscipit
                repudiandae molestias quasi id adipisci aliquam.
            </p>
            <h1>Box with Overflow</h1>
            <h1>Box with Overflow</h1>
            <InputSelect {...args}>Test Children</InputSelect>
            <h1>Box with Overflow</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                possimus voluptates mollitia accusamus assumenda commodi ea
                velit quibusdam id officiis. Aperiam autem quas suscipit
                repudiandae molestias quasi id adipisci aliquam.
            </p>
            <h1>Box with Overflow</h1>
            <h1>Box with Overflow</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                possimus voluptates mollitia accusamus assumenda commodi ea
                velit quibusdam id officiis. Aperiam autem quas suscipit
                repudiandae molestias quasi id adipisci aliquam.
            </p>
            <h1>Box with Overflow</h1>
            <h1>Box with Overflow</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                possimus voluptates mollitia accusamus assumenda commodi ea
                velit quibusdam id officiis. Aperiam autem quas suscipit
                repudiandae molestias quasi id adipisci aliquam.
            </p>
            <h1>Box with Overflow</h1>
            <h1>Box with Overflow</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                possimus voluptates mollitia accusamus assumenda commodi ea
                velit quibusdam id officiis. Aperiam autem quas suscipit
                repudiandae molestias quasi id adipisci aliquam.
            </p>
            <h1>Box with Overflow</h1>
            <h1>Box with Overflow</h1>
        </div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            possimus voluptates mollitia accusamus assumenda commodi ea velit
            quibusdam id officiis. Aperiam autem quas suscipit repudiandae
            molestias quasi id adipisci aliquam.
        </p>
        <h1>Box with Overflow</h1>
        <h1>Box with Overflow</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            possimus voluptates mollitia accusamus assumenda commodi ea velit
            quibusdam id officiis. Aperiam autem quas suscipit repudiandae
            molestias quasi id adipisci aliquam.
        </p>
        <h1>Box with Overflow</h1>
        <h1>Box with Overflow</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            possimus voluptates mollitia accusamus assumenda commodi ea velit
            quibusdam id officiis. Aperiam autem quas suscipit repudiandae
            molestias quasi id adipisci aliquam.
        </p>
        <h1>Box with Overflow</h1>
        <style>
            {`
            .overflow-hidden{
                overflow:hidden;
            }
            .overflow-auto{
                overflow:auto;
            }

            `}
        </style>
    </div>
);

export const In_Oveflow = InOveflow.bind({});

const In_Oveflow_arg: InputSelectProps = {
    id: "select",
    name: "select",
    label: "Select",
    placeholder: "Select",
    datalist: "listOption",
    options: new Array(10)
        .fill([
            {
                id: "1",
                text: "Option 1",
                children: <>Option 1</>,
            },
            {
                id: "2",
                text: "Option 2",
                children: <>Option 2</>,
            },
            {
                id: "3",
                text: "Option 3",
                children: <>Option 3</>,
            },
            {
                id: "4",
                text: "Option 4",
                children: <>Option 4</>,
            },
            {
                id: "5",
                text: "Option 5",
                children: <>Option 5</>,
            },
            {
                id: "6",
                text: "Option 6",
                children: <>Option 6</>,
            },
            {
                id: "7",
                text: "Option 7",
                children: <>Option 7</>,
            },
        ])
        .flat(2),
    create: {
        id: "create",
        text: "Create",
    },
    onCreate: () => alert("Create"),

    onChangeValidate: (e: InputSelectItemOptionBaseProps | undefined) => {
        if (!e) {
            throw "Is Required";
        }
    },
};

In_Oveflow.args = In_Oveflow_arg;

const ProfileModal: Story<InputSelectProps> = (args) => (
    <Modal type="bottom" ElementActionModalActive={<Button>Btn</Button>}>
    <InputSelect {...args}>Test Children</InputSelect>
        <InputSelect {...args}>Test Children</InputSelect>
        <InputSelect {...args}>Test Children</InputSelect>
        <InputSelect {...args}>Test Children</InputSelect>
    </Modal>
);

export const TestingSelectMovilInModal = ProfileModal.bind({});
TestingSelectMovilInModal.args = args;




const InLayout: Story<InputSelectProps> = (args) => (
    <LayoutGridMenuTopLeft>
    <InputSelect {...args}>Test Children</InputSelect>
    <div style={{
        height:"80dvh"
    }}>

    </div>
    <InputSelect {...args}>Test Children</InputSelect>
    </LayoutGridMenuTopLeft>
);

export const In_Layout = InLayout.bind({});

In_Layout.args = In_Oveflow_arg;





export const Box = Profile.bind({});

const Boxargs: InputSelectProps = {
    ...args,
    typeSelectStyle:'box',

    options: new Array(20).fill(1).map((e,i)=>{
        const n = e*i+1
        return {

            id:n,
            text: `Option ${n}`,
            children: <>Option {n}</>,
        }
    }),
};

Box.args = Boxargs;



export const Checkbox = Profile.bind({});

const Checkboxarg: InputSelectProps = {
    ...args,
    typeSelectStyle:'checkbox',

    options: new Array(20).fill(1).map((e,i)=>{
        const n = e*i+1
        return {

            id:n,
            text: `Option ${n}`,
            children: <>Option {n}</>,
        }
    }),
};

Checkbox.args = Checkboxarg;




export const MaxLengthOptions = Profile.bind({});

const MaxLengthOptionsArgs: InputSelectProps = {
    id: "select",
    name: "select",
    label: "Select",
    placeholder: "Select",
    datalist: "listOption",
    options: new Array(1000).fill(1).map((e,i)=>{
        const n =  e * i + 1
        return  {
            id: n,
            text: `Option ${n}`,
            children: <>Option {n}</>,
            data:n,
            img:"https://www.aerocivil.gov.co/Style%20Library/CEA/img/01.jpg"
        }
    }),
    create: {
        id: "create",
        text: "Create",
    },
    onCreate: () => alert("Create"),

    onChangeValidate: (e: InputSelectItemOptionBaseProps | undefined) => {
        if (!e) {
            throw new ErrorInputRequired();
        }
    },
    maxLengthShowOptions:20,
    // disabled:true
};

MaxLengthOptions.args = MaxLengthOptionsArgs;





export const MaxLengthOptionsWithSearch = Profile.bind({});

const MaxLengthOptionsWithSearchArgs: InputSelectProps = {
    ...MaxLengthOptionsArgs,
    converterInSearchWithMaxLenght:true,
    placeholderFocus:"Search"
};

MaxLengthOptionsWithSearch.args = MaxLengthOptionsWithSearchArgs;




const FV = FenextjsValidator().isNumber().isMin(5)

const ValidatorDataArgs: InputSelectProps = {
    ...MaxLengthOptionsArgs,
    validatorData:FV,
};

export const ValidatorData = Profile.bind({});
ValidatorData.args = ValidatorDataArgs;

const WithLoaderProfile: Story<InputSelectProps> = (args) => {
    const [options, setOptions] = useState<InputSelectItemOptionBaseProps[]>([])
    const [loader, setLoader] = useState(false)
    return (
        <InputSelect {...args}
            onChangeText={()=>{
                (async()=>{
                    setLoader(true)
                    setOptions([])
                    await sleep(2000)
                    setOptions([
                        {
                            id: "1",
                            text: "Option 1",
                            children: <>Option 1</>,
                            disabled:true,
                            img:"https://www.aerocivil.gov.co/Style%20Library/CEA/img/01.jpg"
                        },
                        {
                            id: "2",
                            text: "Option 2",
                            children: <>Option 2</>,
                            img:"https://www.aerocivil.gov.co/Style%20Library/CEA/img/01.jpg"
                        },
                        {
                            id: "3",
                            text: "Option 3",
                            children: <>Option 3</>,
                        },
                        {
                            id: "4",
                            text: "Option 4",
                            children: <>Option 4</>,
                        },
                        {
                            id: "5",
                            text: "Option 5",
                            children: <>Option 5</>,
                        },
                        {
                            id: "6",
                            text: "Option 6",
                            children: <>Option 6</>,
                        },
                        {
                            id: "7",
                            text: "Option 7",
                            children: <>Option 7</>,
                        },
                    ])
                    setLoader(false)
                })()
            }}
            options={options}
            loader={loader}
        
        >Test Children</InputSelect>
    )
};

export const WithLoader = WithLoaderProfile.bind({});