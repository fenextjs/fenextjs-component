import { Button } from "../../Button";
import { InputText } from "../../Input/Text";
import React, { ReactNode, useState } from "react";
import { useData } from "fenextjs-hook/cjs/useData";
import {
    RequestProps,
    RequestResultProps,
} from "fenextjs-interface/cjs/Request";
import { use_T } from "fenextjs-hook";
import { _TProps } from "fenextjs-interface";

export interface ChatFormSendMessageDataProps {
    message: string;
}

export interface ChatFormSendMessageProps extends _TProps {
    onSubmit?: RequestProps<ChatFormSendMessageDataProps, RequestResultProps>;
    loader?: boolean;
    useSubmitInEnter?: boolean;
    btnChildren?: ReactNode;
    placeholderMessage?: string;
}
export const ChatFormSendMessage = ({
    useSubmitInEnter = true,
    btnChildren = "Send",
    placeholderMessage = "Message",
   
    ...props
}: ChatFormSendMessageProps) => {
    const {_t} = use_T({...props})
    const [__key, set__key] = useState(0);
    const [loader, setLoader] = useState(false);

    const { data, onChangeData } = useData<ChatFormSendMessageDataProps>({
        message: "",
    });

    const onSubmit = async () => {
        setLoader(true);
        try {
            await props?.onSubmit?.(data);
        } finally {
            setLoader(false);
            set__key((a) => a + 1);
            onChangeData("message")("");
        }
    };

    return (
        <>
            <form
                className="fenext-chat-form-send-message"
                key={__key}
                onSubmit={onSubmit}
            >
                <InputText
                    type="textarea"
                    placeholder={_t(placeholderMessage)}
                    className="fenext-chat-form-send-message-input-message"
                    onChange={onChangeData("message")}
                    value={data.message}
                    onEnter={() => {
                        if (!data.message || data.message == "") {
                            return;
                        }
                        if (useSubmitInEnter) {
                            onSubmit();
                        }
                    }}
                    disabled={loader || props?.loader}
                />
                <Button
                    loader={loader || props?.loader}
                    disabled={!data.message || data.message == ""}
                >
                    {_t(btnChildren)}
                </Button>
            </form>
        </>
    );
};
