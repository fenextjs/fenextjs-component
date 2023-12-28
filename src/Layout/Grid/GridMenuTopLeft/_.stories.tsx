import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";

import { LayoutGridMenuTopLeft, LayoutGridMenuTopLeftProps } from "./index";
import { ButtonMenu } from "../../../Header/ButtonMenu";

export default {
    title: "Layout/LayoutGridMenuTopLeft",
    component: LayoutGridMenuTopLeft,
} as Meta;

const Profile: Story<PropsWithChildren<LayoutGridMenuTopLeftProps>> = (
    args,
) => <LayoutGridMenuTopLeft {...args} />;

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
    menuTop: (
        <>
            <h3>It is Header</h3>
        </>
    ),
    menuLeft: (
        <>
            <h3>It is Menu Left</h3>
        </>
    ),
} as LayoutGridMenuTopLeftProps;

export const WithBtnMenu = Profile.bind({});
WithBtnMenu.args = {
    useHeaderButtonMenu: true,
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
    menuTop: (
        <>
            <ButtonMenu />
            <h3>It is Header</h3>
        </>
    ),
    menuLeft: (
        <>
            <h3>It is Menu Left</h3>
        </>
    ),
} as LayoutGridMenuTopLeftProps;

export const WithBtnMenuAndElementContainer = Profile.bind({});
WithBtnMenuAndElementContainer.args = {
    useHeaderButtonMenu: true,
    children: (
        <>
            <h1>It is Body</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aperiam laboriosam qui expedita nostrum facere consequuntur
                labore blanditiis perspiciatis ducimus est, iure dolorem
                nesciunt numquam modi hic, sit repellat at iste?
            </p>
            <div className="content_c">
                <h3>@container con fenext-layout-grid-ml-children</h3>
                <code>
                   {`
                     @container  (min-width: 700px) {
                        .content_c {
                            background:red
                        }
                    }

                   `}
                </code>
                <br />
                or
                <br />
                <code>
                   {`
                    @container  fenext-layout-grid-ml-children (min-width: 700px) {
                       .content_c {
                           background:red
                       }
                   }

                   `}
                </code>
                <br />
                <br />
                <br />
                <br />
                <h3>@container con fenext-layout-grid-mt-children (window width)</h3>
                <code>
                   {`
                    @container fenext-layout-grid-mt-children (min-width: 700px) {
                        .content_c {
                            border:5px solid blue;
                        }
                    }

                   `}
                </code>
            </div>
            <style>
                {`
                .content_c{
                    padding:1rem;
                }
                @container  (min-width: 700px) {
                    .content_c {
                        background:red
                    }
                }
                @container  fenext-layout-grid-ml-children (min-width: 700px) {
                   .content_c {
                       background:red
                   }
               }
                @container fenext-layout-grid-mt-children (min-width: 700px) {
                    .content_c {
                        border:5px solid blue;
                    }
                }
            `}
            </style>
        </>
    ),
    menuTop: (
        <>
            <ButtonMenu />
            <h3>It is Header</h3>
        </>
    ),
    menuLeft: (
        <>
            <h3>It is Menu Left</h3>
        </>
    ),
} as LayoutGridMenuTopLeftProps;
