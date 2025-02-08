import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { GridCols, GridColsProps } from "./index";

export default {
    title: "Component/GridCols",
    component: GridCols,
} as Meta;

const Profile: StoryFn<PropsWithChildren<GridColsProps>> = (args) => (
    <GridCols {...args} />
);

export const Index = Profile.bind({});
Index.args = {
    children: (
        <>
            {new Array(20).fill(1).map((e, i) => {
                const n = e * i + 1;
                return (
                    <>
                        <div key={n}>
                            <h1>Title {n}</h1>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Inventore necessitatibus velit
                                corporis hic provident at ad et ratione soluta
                                dolores, veniam dolorem. Illum consectetur
                                voluptatum tempora, unde distinctio quas.
                                Libero?
                            </p>
                            <br />
                            {new Array(n).fill(
                                <>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Inventore
                                        necessitatibus velit corporis hic
                                        provident at ad et ratione soluta
                                        dolores, veniam dolorem. Illum
                                        consectetur voluptatum tempora, unde
                                        distinctio quas. Libero?
                                    </p>
                                    <br />
                                </>,
                            )}
                        </div>
                    </>
                );
            })}
        </>
    ),
    colsMin768:"1fr 1fr"
} as GridColsProps;
