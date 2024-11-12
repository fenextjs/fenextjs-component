import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";
import { useAlert } from "fenextjs-hook";
import { AlertHook, AlertHookProps } from "./index";
import { Button } from "../Button";
import { AlertProps } from "fenextjs-interface";

export default {
    title: "Component/AlertHook",
    component: AlertHook,
} as Meta;

const Profile: StoryFn<PropsWithChildren<AlertHookProps>> = (args) => {
    const { setAlert } = useAlert({});
    const argsBase: AlertProps = {
        message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tenetur ullam voluptatum dignissimos deserunt quasi nihil",
        type: "OK",
    };
    const argsBaseOK: AlertProps = {
        ...argsBase,
    };
    const argsBaseERROR: AlertProps = {
        ...argsBase,
        type: "ERROR",
    };
    const argsBaseNORMAL: AlertProps = {
        ...argsBase,
        type: "NORMAL",
    };
    const argsBaseWARNING: AlertProps = {
        ...argsBase,
        type: "WARNING",
    };

    return (
        <>
            <div style={{
                display:"grid",
                gap:"1rem"
            }}>
            <AlertHook {...args} />
            <Button
                onClick={() => {
                    setAlert(argsBaseOK);
                }}
            >
                Test generate alert OK
            </Button>
            <Button
                onClick={() => {
                    setAlert(argsBaseERROR);
                }}
            >
                Test generate alert ERROR
            </Button>
            <Button
                onClick={() => {
                    setAlert(argsBaseNORMAL);
                }}
            >
                Test generate alert NORMAL
            </Button>
            <Button
                onClick={() => {
                    setAlert(argsBaseWARNING);
                }}
            >
                Test generate alert WARNING
            </Button>
            </div>
        </>
    );
};

const args: AlertHookProps = {};
export const Index = Profile.bind({});
Index.args = args;
