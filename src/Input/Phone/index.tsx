import React, { useEffect, useState } from "react";
import * as Yup from "yup";

import { InputText, InputTextBaseProps, InputTextClassProps } from "../Text";
import { InputSelect, InputSelectClassProps } from "../Select";
import { PhoneProps } from "fenextjs-interface/cjs/Phone";
import { useData } from "fenextjs-hook/cjs/useData";
import { ErrorFenextjs } from "fenextjs-error";
import { ErrorComponent } from "../../Error";
import { ErrorCode } from "fenextjs-interface";
import { useValidator } from "fenextjs-hook";
import { FenextjsValidator, FenextjsValidatorClass } from "fenextjs-validator";
import {
    _tValidate,
    parsePhone_to_String,
    parseString_to_Phone,
} from "fenextjs-functions";
import {
    useJsonString,
    useJsonStringProps,
} from "fenextjs-hook/cjs/useJsonString";

/**
 * Interface that defines CSS class properties for a checkbox input component.
 */
export interface InputPhoneClassProps {
    /**
     * Obj of class name Select Code.
     */
    classNameSelectCode?: InputSelectClassProps;
    /**
     * Obj of class name Input Number.
     */
    classNameInputNumber?: InputTextClassProps;
    /**
     * Class Name Phone.
     */
    classNamePhone?: string;
    /**
     * Class Name Phone Label.
     */
    classNamePhoneLabel?: string;
    /**
     * Class Name Phone Code.
     */
    classNamePhoneCode?: string;
    /**
     * Class Name Phone Number.
     */
    classNamePhoneNumber?: string;
    /**
     * Class Name Error.
     */
    classNameError?: string;
}

/**
 * Interface that defines base properties for a checkbox input component.
 */
export interface InputPhoneBaseProps
    extends Omit<
            InputTextBaseProps,
            | "type"
            | "value"
            | "onChange"
            | "defaultValue"
            | "datalist"
            | "validator"
        >,
        useJsonStringProps<Partial<PhoneProps>> {
    /**
     * disabled select code.
     */
    disabledSelectCode?: boolean;
    /**
     * Placeholder select code.
     */
    placeholderCode?: string;
    /**
     * FenextjsValidatorClass used for input validation.
     */
    validator?: FenextjsValidatorClass<PhoneProps>;
}

/**
 * Interface that defines all properties for a checkbox input component.
 * Extends InputPhoneBaseProps and InputPhoneClassProps.
 */
export interface InputPhoneProps
    extends InputPhoneBaseProps,
        InputPhoneClassProps {}

/**
 * Component that renders a checkbox input.
 * Takes an InputPhoneProps object as props.
 */
export const InputPhone = ({
    classNameInputNumber = {},
    classNameSelectCode = {},
    classNamePhone = "",
    classNamePhoneCode = "",
    classNamePhoneLabel = "",
    classNamePhoneNumber = "",
    classNameError = "",

    disabledSelectCode = false,
    disabled,
    label,
    loader,
    yup = Yup.object().shape({
        code: Yup.string().required(),
        number: Yup.string().required(),
    }),
    placeholderCode = "+57",
    placeholder = "xxx-xx-xx-xxxx",
    validator = undefined,
    _t = (e) => e,
    optional = false,
    optionalText = "(optional)",
    required = false,
    requiredText = "*",

    defaultValue: defaultValueProps = {
        code: "+57",
        number: "",
        tel: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/20px-Flag_of_Colombia.svg.png",
    },
    value: valueProps = undefined,
    onChange: onChangeProps,
    defaultValueJsonString,
    valueJsonString,
    onChangeJsonString,
    parseJson_to_String,
    parseString_to_Json,

    ...props
}: InputPhoneProps) => {
    const { value, defaultValue, onChange } = useJsonString<
        Partial<PhoneProps>
    >({
        parseJson_to_String: parseJson_to_String ?? parsePhone_to_String,
        parseString_to_Json: parseString_to_Json ?? parseString_to_Phone,
        defaultValueJsonString,
        valueJsonString,
        onChangeJsonString,
        value: valueProps,
        defaultValue: defaultValueProps,
        onChange: onChangeProps,
    });

    const [error, setError] = useState<ErrorFenextjs | undefined>(undefined);
    const [loadPhoneCodes, setlLoadPhoneCodes] = useState(false);
    const {
        dataMemo: data,
        onChangeData,
        onConcatData,
        isChange,
    } = useData<Partial<PhoneProps>, Partial<PhoneProps>>(defaultValue ?? {}, {
        onChangeDataMemoAfter: onChange,
        onMemo: (d: Partial<PhoneProps>) => {
            const v = value ?? d;
            return {
                ...v,
                tel: `${v.code} ${v.number}`,
            };
        },
        onChangeDataAfter: (data: Partial<PhoneProps>) => onValidatePhone(data),
    });
    const [phones, setPhones] = useState<Pick<PhoneProps, "code" | "img">[]>(
        [],
    );
    const onValidatePhone = async (data: Partial<PhoneProps>) => {
        try {
            const valid = await yup.validate(data);
            if (valid) {
                setError(undefined);
            }
        } catch (error: any) {
            setError(
                new ErrorFenextjs({
                    code: ErrorCode.ERROR,
                    message: `${error.message}`,
                }),
            );
        }
    };
    const loadPhones = async () => {
        const { phones } = await import("world-phones");
        setPhones(phones);
        setlLoadPhoneCodes(true);
    };
    useEffect(() => {
        loadPhones();
    }, []);

    const { error: errorFenext } = useValidator({
        data: data,
        validator: validator ?? FenextjsValidator(),
    });

    return (
        <>
            <div className={`fenext-input-phone ${classNamePhone}`}>
                <div
                    className={`fenext-input-phone-label fenext-input-label ${classNamePhoneLabel} `}
                >
                    {_tValidate(label, _t)}
                    {optional && (
                        <>
                            <small className="fenext-input-optional">
                                {_tValidate(optionalText, _t)}
                            </small>
                        </>
                    )}
                    {required && (
                        <>
                            <small className="fenext-input-required">
                                {_tValidate(requiredText, _t)}
                            </small>
                        </>
                    )}
                </div>
                <div
                    className={`fenext-input-phone-code ${classNamePhoneCode}`}
                >
                    <InputSelect<Partial<PhoneProps>>
                        {...classNameSelectCode}
                        key={data.code}
                        placeholder={placeholderCode}
                        _t={_t}
                        options={phones.map((phone) => {
                            return {
                                id: phone.code,
                                text: phone.code,
                                img: phone.img,
                                data: phone,
                            };
                        })}
                        disabled={
                            !loadPhoneCodes || disabled || disabledSelectCode
                        }
                        defaultValue={
                            data?.code
                                ? {
                                      id: data.code,
                                      text: data.code,
                                      img: data.img,
                                      data: data,
                                  }
                                : undefined
                        }
                        onChange={(option) => {
                            if (option?.data?.code) {
                                onConcatData({
                                    code: option?.data?.code,
                                    img: option?.data?.img,
                                });
                            }
                        }}
                        regExp={/[^0-9+-]/g}
                        regExpReplace=""
                        icon={<></>}
                        changeByFirstOptionInOnBlur={true}
                        optional={false}
                    />
                </div>
                <div
                    className={`fenext-input-phone-text ${classNamePhoneNumber}`}
                >
                    <InputText
                        {...classNameInputNumber}
                        {...props}
                        type="text"
                        onChange={onChangeData("number")}
                        loader={!loadPhoneCodes || loader}
                        disabled={!loadPhoneCodes || disabled}
                        placeholder={placeholder}
                        defaultValue={data?.number}
                        value={value?.number}
                        _t={_t}
                        validator={validator?.getObjectValidator?.()?.number}
                        inputMode="numeric"
                        regExpReplace=""
                        regExp={/[^0-9]/g}
                        optional={false}
                    />
                </div>
                {((props?.error ?? error) || (errorFenext && isChange)) && (
                    <ErrorComponent
                        error={errorFenext ?? props?.error ?? error}
                        className={`fenext-input-error ${classNameError}`}
                        _t={_t}
                    />
                )}
            </div>
        </>
    );
};
