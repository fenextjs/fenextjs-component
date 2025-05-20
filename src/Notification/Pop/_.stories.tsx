import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { NotificationPop, NotificationPopProps } from "./index";
import { Button } from "../../Button";
import { useNotification } from "fenextjs-hook";
import { RequestResultTypeProps } from "fenextjs-interface/cjs/Request";

export default {
    title: "Notification/NotificationPop",
    component: NotificationPop,
} as Meta;

const Profile: StoryFn<PropsWithChildren<NotificationPopProps>> = (args) => {
    const { pop } = useNotification({});
    return (
        <>
            <Button
                onClick={() => {
                    pop({
                        message: "Message OK",
                        type: RequestResultTypeProps.OK,
                    });
                }}
            >
                Test OK
            </Button>
            <Button
                onClick={() => {
                    pop({
                        message: "Message ERROR",
                        type: RequestResultTypeProps.ERROR,
                    });
                }}
            >
                Test ERROR
            </Button>
            <Button
                onClick={() => {
                    pop({
                        message: "Message WARNING",
                        type: RequestResultTypeProps.WARNING,
                    });
                }}
            >
                Test WARNING
            </Button>
            <Button
                onClick={() => {
                    pop({
                        message: "Message NORMAL",
                        type: RequestResultTypeProps.NORMAL,
                    });
                }}
            >
                Test NORMAL
            </Button>
            <NotificationPop {...args} />
        </>
    );
};

export const Index = Profile.bind({});
Index.args = {} as NotificationPopProps;
