import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";

import { LayoutGridMenuLeft, LayoutGridMenuLeftProps } from "./index";
import { ButtonMenu } from "../../../Header/ButtonMenu";

export default {
    title: "Layout/LayoutGridMenuLeft",
    component: LayoutGridMenuLeft,
} as Meta;

const Profile: Story<PropsWithChildren<LayoutGridMenuLeftProps>> = (args) => (
    <LayoutGridMenuLeft {...args} />
);

export const Index = Profile.bind({});
Index.args = {
    children: (
        <>
            <h1>It is Body</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aperiam laboriosam qui expedita nostrum facere consequuntur
                labore blanditiis perspiciatis ducimus est, iure dolorem
                nesciunt numquam modi hic, sit repellat at iste?
            </p>
            <h1>It is Body</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aperiam laboriosam qui expedita nostrum facere consequuntur
                labore blanditiis perspiciatis ducimus est, iure dolorem
                nesciunt numquam modi hic, sit repellat at iste?
            </p>
            <h1>It is Body</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aperiam laboriosam qui expedita nostrum facere consequuntur
                labore blanditiis perspiciatis ducimus est, iure dolorem
                nesciunt numquam modi hic, sit repellat at iste?
            </p>
            <h1>It is Body</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aperiam laboriosam qui expedita nostrum facere consequuntur
                labore blanditiis perspiciatis ducimus est, iure dolorem
                nesciunt numquam modi hic, sit repellat at iste?
            </p>
            <h1>It is Body</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aperiam laboriosam qui expedita nostrum facere consequuntur
                labore blanditiis perspiciatis ducimus est, iure dolorem
                nesciunt numquam modi hic, sit repellat at iste?
            </p>
            <h1>It is Body</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aperiam laboriosam qui expedita nostrum facere consequuntur
                labore blanditiis perspiciatis ducimus est, iure dolorem
                nesciunt numquam modi hic, sit repellat at iste?
            </p>
            <h1>It is Body</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aperiam laboriosam qui expedita nostrum facere consequuntur
                labore blanditiis perspiciatis ducimus est, iure dolorem
                nesciunt numquam modi hic, sit repellat at iste?
            </p>
            <h1>It is Body</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aperiam laboriosam qui expedita nostrum facere consequuntur
                labore blanditiis perspiciatis ducimus est, iure dolorem
                nesciunt numquam modi hic, sit repellat at iste?
            </p>
            <h1>It is Body</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aperiam laboriosam qui expedita nostrum facere consequuntur
                labore blanditiis perspiciatis ducimus est, iure dolorem
                nesciunt numquam modi hic, sit repellat at iste?
            </p>
            <h1>It is Body</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aperiam laboriosam qui expedita nostrum facere consequuntur
                labore blanditiis perspiciatis ducimus est, iure dolorem
                nesciunt numquam modi hic, sit repellat at iste?
            </p>
            <h1>It is Body</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aperiam laboriosam qui expedita nostrum facere consequuntur
                labore blanditiis perspiciatis ducimus est, iure dolorem
                nesciunt numquam modi hic, sit repellat at iste?
            </p>
            <h1>It is Body</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aperiam laboriosam qui expedita nostrum facere consequuntur
                labore blanditiis perspiciatis ducimus est, iure dolorem
                nesciunt numquam modi hic, sit repellat at iste?
            </p>
            <h1>It is Body</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aperiam laboriosam qui expedita nostrum facere consequuntur
                labore blanditiis perspiciatis ducimus est, iure dolorem
                nesciunt numquam modi hic, sit repellat at iste?
            </p>
            <h1>It is Body</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aperiam laboriosam qui expedita nostrum facere consequuntur
                labore blanditiis perspiciatis ducimus est, iure dolorem
                nesciunt numquam modi hic, sit repellat at iste?
            </p>
            <h1>It is Body</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aperiam laboriosam qui expedita nostrum facere consequuntur
                labore blanditiis perspiciatis ducimus est, iure dolorem
                nesciunt numquam modi hic, sit repellat at iste?
            </p>
            <h1>It is Body</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aperiam laboriosam qui expedita nostrum facere consequuntur
                labore blanditiis perspiciatis ducimus est, iure dolorem
                nesciunt numquam modi hic, sit repellat at iste?
            </p>
            <h1>It is Body</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aperiam laboriosam qui expedita nostrum facere consequuntur
                labore blanditiis perspiciatis ducimus est, iure dolorem
                nesciunt numquam modi hic, sit repellat at iste?
            </p>
            <h1>It is Body</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aperiam laboriosam qui expedita nostrum facere consequuntur
                labore blanditiis perspiciatis ducimus est, iure dolorem
                nesciunt numquam modi hic, sit repellat at iste?
            </p>
        </>
    ),
    menuLeft: (
        <>
            <h3>It is Menu Left</h3>
        </>
    ),
} as LayoutGridMenuLeftProps;

export const WithBtnMenu = Profile.bind({});
WithBtnMenu.args = {
    useHeaderButtonMenu:true,
    children: (
        <>
            <ButtonMenu />
        </>
    ),
    menuLeft: (
        <>
            <h3>It is Menu Left</h3>

            <label htmlFor="fenext-btn-menu-checkbox">
                CLOSE
            </label>
        </>
    ),
} as LayoutGridMenuLeftProps;
