import { Button } from "../../Button";
import { InputText } from "../../Input/Text";
import React, { ReactNode, useRef, useState } from "react";
import { useData } from "fenextjs-hook/cjs/useData";
import { use_T } from "fenextjs-hook";
import { _TProps, FileProps } from "fenextjs-interface";
import { SvgPaperClip, SvgSend } from "fenextjs-svg";
import { InputFile, InputFileProps } from "../../Input/File";

export interface ChatFormSendMessageDataProps {
    message?: string;
    file?: FileProps
}

export interface ChatFormSendMessageProps extends _TProps {
    onSubmit?: (data: ChatFormSendMessageDataProps) => Promise<void>;
    loader?: boolean;
    useSubmitInEnter?: boolean;
    btnChildren?: ReactNode;
    btnFileChildren?: ReactNode;
    InputFileProps?: Omit<InputFileProps, "onChange">
    placeholderMessage?: string;
}
export const ChatFormSendMessage = ({
    useSubmitInEnter = true,
    btnChildren = <SvgSend />,
    btnFileChildren = <SvgPaperClip />,
    placeholderMessage = "Message",
    InputFileProps = {},

    ...props
}: ChatFormSendMessageProps) => {
    const { _t } = use_T({ ...props });
    const ref = useRef(null)
    const [__key, set__key] = useState(0);

    const { data, setData, onChangeData, loaderSubmit, onSubmitData } = useData<ChatFormSendMessageDataProps>({

    }, {
        
        onSubmitData: async (data) => {
            try {
                console.log({data});
                
                await props?.onSubmit?.(data);
            } finally {
                set__key((a) => a + 1);
                setData({})
                const label = ((ref?.current as any)?.querySelector?.(`.fenext-chat-form-send-message-label`) as any)
                const chat = document.querySelector(".fenext-chat") as any

                setTimeout(function () {
                    label?.click?.();
                }, 0);
                setTimeout(function () {
                    chat?.scrollTo?.(0, chat?.scrollTop + 99990000009)
                }, 10);
            }
        }
    });
    return (
        <>
            <div
                className="fenext-chat-form-send-message"
                ref={ref}
            >
                <InputText
                    classNameLabel="fenext-chat-form-send-message-label"
                    type="textarea"
                    placeholder={_t(placeholderMessage)}
                    className="fenext-chat-form-send-message-input-message"
                    onChange={onChangeData("message")}
                    value={data.message ?? ''}
                    onEnter={() => {
                        if (!data.message || data.message == "") {
                            return;
                        }
                        if (useSubmitInEnter) {
                            onSubmitData();
                        }
                    }}
                    disabled={loaderSubmit || props?.loader}
                />
                <div
                    className="fenext-chat-form-send-message-content-btn"
                >
                    <Button
                        loader={loaderSubmit || props?.loader}
                        disabled={!data.message || data.message == ""}
                        _t={_t}
                        size="extra-small"
                    >{btnChildren}
                    </Button>
                    <InputFile
                        {...InputFileProps}
                        key={__key}
                        onChange={(e) => {
                            onSubmitData({
                                data:{
                                    ...data,
                                    file:e
                                }
                            })
                        }}

                    >

                        <Button
                            loader={loaderSubmit || props?.loader}
                            _t={_t}
                            size="extra-small"
                        >{btnFileChildren}
                        </Button>
                    </InputFile>
                </div>
            </div>
        </>
    );
};
