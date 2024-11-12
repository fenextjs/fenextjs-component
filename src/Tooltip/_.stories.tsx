import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import {
    Tooltip,
    TooltipPositionX,
    TooltipPositionY,
    TooltipProps,
} from "./index";

export default {
    title: "Tooltip/Tooltip",
    component: Tooltip,
} as Meta;

const Profile: StoryFn<PropsWithChildren<TooltipProps>> = (args) => {
    const fn_tooltip = (x: TooltipPositionX, y: TooltipPositionY) => {
        return (
            <>
                <Tooltip
                    tooltip={
                        <>
                            <h4>tooltip</h4>
                            <h3>
                                x-{x} - y-{y}
                            </h3>
                        </>
                    }
                    positionX={x}
                    positionY={y}
                    {...args}
                >
                    <h1>
                        x-{x} - y-{y}
                    </h1>
                </Tooltip>
            </>
        );
    };
    const fn_ = (x: TooltipPositionX, y: TooltipPositionY) => {
        return (
            <>
                <div style={{ display: "flex", gap: "10px" }}>
                    {fn_tooltip(x, y)}
                    <div style={{ flex: "1" }}></div>
                    {fn_tooltip(x, y)}
                    <div style={{ flex: "1" }}></div>
                    {fn_tooltip(x, y)}
                </div>
            </>
        );
    };
    return (
        <div
            style={{
                padding: "50px",
                minHeight: "100dvh",
                display: "flex",
                flexDirection: "column",
                gap: "50px",
                justifyContent: "space-between",
            }}
        >
            {fn_("center", "top")}
            {fn_("right", "top")}
            {fn_("left", "top")}
            {fn_("center", "center")}
            {fn_("right", "center")}
            {fn_("left", "center")}
            {fn_("center", "bottom")}
            {fn_("right", "bottom")}
            {fn_("left", "bottom")}
        </div>
    );
};

export const Index = Profile.bind({});
Index.args = {
    
} as TooltipProps;
