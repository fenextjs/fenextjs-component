import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";

import { InputFile, InputFileProps } from "./index";

export default {
    title: "Input/InputFile",
    component: InputFile,
} as Meta;

const Profile: Story<PropsWithChildren<InputFileProps>> = (args) => (
    <InputFile {...args}>
        <div style={{fontSize:"4rem"}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis illum perferendis distinctio minima sunt autem perspiciatis doloremque qui iure sed, molestias error, atque eligendi explicabo iusto quis expedita. Dolore, corporis!
        </div>
    </InputFile>
);

export const Index = Profile.bind({});
Index.args = {

}as InputFileProps
