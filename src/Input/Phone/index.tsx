import React, { useEffect, useState } from "react";

import { InputText, InputTextBaseProps, InputTextClassProps } from "../Text";
import { InputSelectClassProps } from "../Select";
import { PhoneProps } from "fenextjs-interface/cjs/Phone";
import { useData } from "fenextjs-hook/cjs/useData";
import { ErrorComponent } from "../../Error";
import { CountryProps } from "fenextjs-interface";
import { useValidator, use_T } from "fenextjs-hook";
import { FenextjsValidator, FenextjsValidatorClass } from "fenextjs-validator";
import { parsePhone_to_String, parseString_to_Phone } from "fenextjs-functions";
import {
    useJsonString,
    useJsonStringProps,
} from "fenextjs-hook/cjs/useJsonString";
import { getDataCountrys, getRuteCountryImg } from "country-state-city-nextjs";
import { InputSelectT } from "../SelectT";

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

    placeholderCode = "+57",
    placeholder = "xxx-xx-xx-xxxx",
    validator = undefined,
    optional = false,
    optionalText = "(optional)",
    required = false,
    requiredText = "*",

    defaultValue: defaultValueProps = {
        code: "+57",
        number: "",
        tel: "",
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
    const { _t } = use_T({ ...props });
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
    });
    const [phones, setPhones] = useState<CountryProps[]>([]);
    const loadPhones = async () => {
        const countrys: CountryProps[] = await getDataCountrys();
        setPhones(countrys);
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
                    {_t(label)}
                    {optional && (
                        <>
                            <small className="fenext-input-optional">
                                {_t(optionalText)}
                            </small>
                        </>
                    )}
                    {required && (
                        <>
                            <small className="fenext-input-required">
                                {_t(requiredText)}
                            </small>
                        </>
                    )}
                </div>
                <div
                    className={`fenext-input-phone-code ${classNamePhoneCode}`}
                >
                    <InputSelectT<CountryProps>
                        {...classNameSelectCode}
                        classNameList={`fenext-input-phone-select-code ${classNameSelectCode?.classNameList ?? ""}`}
                        key={`${defaultValue?.code}-${value?.code}-${phones.length}`}
                        placeholder={placeholderCode}
                        _t={_t}
                        options={phones}
                        onParse={(e) => {
                            return {
                                id: e?.code_phone ?? "",
                                text: e?.code_phone ?? "",
                                data: e,
                                img: e ? `${getRuteCountryImg(e)}` : undefined,
                            };
                        }}
                        disabled={
                            !loadPhoneCodes || disabled || disabledSelectCode
                        }
                        defaultValue={phones.find(
                            (e) => e.code_phone == defaultValue?.code,
                        )}
                        value={
                            value
                                ? phones.find(
                                      (e) => e.code_phone == value?.code,
                                  )
                                : undefined
                        }
                        onChange={(e) => {
                            if (e?.code_phone) {
                                onConcatData({
                                    code: e?.code_phone,
                                    img: e
                                        ? `${getRuteCountryImg(e)}`
                                        : undefined,
                                });
                            }
                        }}
                        regExp={/[^0-9+-]/g}
                        regExpReplace=""
                        icon={<></>}
                        // changeByFirstOptionInOnBlur={true}
                        optional={false}
                        showOptionIconImg={true}
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
                {(props?.error || (errorFenext && isChange)) && (
                    <ErrorComponent
                        error={errorFenext ?? props?.error}
                        className={`fenext-input-error ${classNameError}`}
                        _t={_t}
                    />
                )}
            </div>
        </>
    );
};
