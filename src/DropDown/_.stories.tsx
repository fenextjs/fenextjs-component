import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";
import {Modal} from '../Modal'
import {Button} from '../Button'
import { DropDown, DropDownProps, useActionDropDown } from "./index";

export default {
    title: "DropDown/DropDown",
    component: DropDown,
} as Meta;

const Profile: StoryFn<PropsWithChildren<DropDownProps>> = (args) => (
    <DropDown {...args} />
);

export const Index = Profile.bind({});
Index.args = {
    header: <>Button DropDown</>,
    children: (
        <>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            temporibus animi facere dolore repudiandae ea consequuntur deserunt.
            Iure, natus officiis! Necessitatibus voluptate iste, eum dolor quis
            cum ipsa nobis reprehenderit!
            <hr />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            temporibus animi facere dolore repudiandae ea consequuntur deserunt.
            Iure, natus officiis! Necessitatibus voluptate iste, eum dolor quis
            cum ipsa nobis reprehenderit!
        </>
    ),
} as DropDownProps;

export const Left = Profile.bind({});
Left.args = {
    ...Index.args,
} as DropDownProps;

const ProfileRight: StoryFn<PropsWithChildren<DropDownProps>> = (args) => (
    <div
        style={{
            display: "flex",
            justifyContent: "flex-end",
        }}
    >
        <DropDown {...args} />
    </div>
);
export const Right = ProfileRight.bind({});
Right.args = {
    ...Index.args,
} as DropDownProps;


const ProfileUp: StoryFn<PropsWithChildren<DropDownProps>> = (args) => (
    <div
        style={{
            display: "flex",
            alignItems:"flex-end",
            minHeight:"80dvh"
        }}
    >
        <DropDown {...args} />
    </div>
);
export const Up = ProfileUp.bind({});
Up.args = {
    ...Index.args,
} as DropDownProps;


const ProfileUpRight: StoryFn<PropsWithChildren<DropDownProps>> = (args) => (
    <div
        style={{
            display: "flex",
            alignItems:"flex-end",
            justifyContent: "flex-end",
            minHeight:"80dvh"
        }}
    >
        <DropDown {...args} />
    </div>
);
export const UpRight = ProfileUpRight.bind({});
UpRight.args = {
    ...Index.args,
} as DropDownProps;



const ProfileCenter: StoryFn<PropsWithChildren<DropDownProps>> = (args) => (
    <div
        style={{
            display: "flex",
            alignItems:"center",
            justifyContent: "center",
            minHeight:"80dvh"
        }}
    >
        <DropDown {...args} />
    </div>
);
export const Center = ProfileCenter.bind({});
Center.args = {
    ...Index.args,
} as DropDownProps;



export const Focus = Profile.bind({});
Focus.args = {
    ...Index.args,
    type:"focus"
} as DropDownProps;



export const Checked = Profile.bind({});
Checked.args = {
    ...Index.args,
    type:"checked"
} as DropDownProps;

export const NoRotateIcon = Profile.bind({});
NoRotateIcon.args = {
    ...Index.args,
    rotateIcon:false
} as DropDownProps;





const useActionProfile: StoryFn<PropsWithChildren<DropDownProps>> = (args) => {
    const {onActive,onClose,onToogle} = useActionDropDown({name:args?.name})
    return (
        <div
            style={{
                display: "flex",
                flexWrap:"wrap",
                gap:"1rem"
            }}
        >
            <Button onClick={onToogle}>onToogle</Button>
            <Button onClick={onActive}>onActive</Button>
            <Button onClick={onClose}>onClose</Button>
            <div style={{width:"100%"}}></div>
            <DropDown {...args} />
        </div>
    );
}
export const ActionDropDown = useActionProfile.bind({});
ActionDropDown.args = {
    ...Index.args,
    name:"name"
} as DropDownProps;







const insideModalProfile: StoryFn<PropsWithChildren<DropDownProps>> = (args) => {
    return (
        <Modal
            ElementActionModalActive={
                <Button>active modal</Button>
            }
        >
            <DropDown {...args} />
        </Modal>
    );
}
export const insideModal = insideModalProfile.bind({});
insideModal.args = {
    ...Index.args,
    name:"name"
} as DropDownProps;