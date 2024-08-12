import React, { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";

import { Steps, StepsProps } from "./index";
import { sleep } from "fenextjs-functions";

export default {
    title: "Steps/Steps",
    component: Steps,
} as Meta;

const Profile: Story<PropsWithChildren<StepsProps>> = (args) => (
    <Steps {...args} />
);

export const Index = Profile.bind({});
Index.args = {
    onNext: async () => {
        await sleep(1000)
    },
    items: [
        {
            label: "Step 1",
            content: (
                <>
                    <h1>Step 1</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                </>
            ),
        },
        {
            label: "Step 2",
            // status:"ok",
            content: (
                <>
                    <h1>Step 2</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                </>
            ),
        },
        {
            label: "Step 3",
            content: (
                <>
                    <h1>Step 3</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                </>
            ),
        },
        {
            label: "Step 4",
            // status:"error",
            content: (
                <>
                    <h1>Step 4</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                </>
            ),
        },
    ],
    forceShowBtnNext:false,
    forceShowBtnPrev:false
} as StepsProps;

export const useStep = Profile.bind({});
useStep.args = {
    onNext: async () => {
        await sleep(1000)
    },
    items: [
        {
            label: "Step 1",
            content: (
                <>
                    <h1>Step 1</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                </>
            ),
        },
        {
            label: "Step 2",
            // status:"ok",
            content: (
                <>
                    <h1>Step 2</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                </>
            ),
        },
        {
            label: "Step 3",
            content: (
                <>
                    <h1>Step 3</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                </>
            ),
        },
        {
            label: "Step 4",
            // status:"error",
            content: (
                <>
                    <h1>Step 4</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae, ipsum soluta! Dignissimos eos, ut porro
                        facilis labore libero tempora cum fugiat accusantium
                        ipsum illo repellat alias quos eaque aspernatur earum?
                    </p>
                </>
            ),
        },
    ],
    useStep:true,
    step:1
} as StepsProps;