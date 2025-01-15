import React from "react";

import { InputText, InputTextBaseProps, InputTextClassProps } from "../Text";
import { InputSelectClassProps } from "../Select";
import { PhoneProps } from "fenextjs-interface/cjs/Phone";
import { ErrorComponent } from "../../Error";
import { CountryProps } from "fenextjs-interface";
import { useValidator, use_T } from "fenextjs-hook";
import { useData } from "fenextjs-hook";
import { FenextjsValidator } from "fenextjs-validator";
import { getDataCountrys, getRuteCountryImg } from "country-state-city-nextjs";
import { InputSelectT } from "../SelectT";
import { FenextjsValidatorClass } from "fenextjs-validator";
import { useEffect, useState } from "react";

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
    > {
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

    parseCountrys?: (data: CountryProps[]) => CountryProps[];
    /**
     * Default Value =
     */
    defaultValue?: Partial<PhoneProps>;
    /**
     * Value
     */
    value?: Partial<PhoneProps>;
    /**
     * onChange
     */
    onChange?: (data: Partial<PhoneProps>) => void;
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

    defaultValue = undefined,
    value = undefined,
    onChange: onChangeProps,
    parseCountrys,
    ...props
}: InputPhoneProps) => {
    const { _t } = use_T({ ...props });

    const onChange = (v: Partial<PhoneProps>) => {
        onChangeProps?.({
            ...v,
            tel: `${v.code ?? ""} ${v.number ?? ""}`,
        });
    };

    const [loadPhoneCodes, setlLoadPhoneCodes] = useState(false);
    const {
        dataMemo: data,
        onChangeData,
        onConcatData,
        isChange,
    } = useData<Partial<PhoneProps>, Partial<PhoneProps>>(
        value ?? defaultValue ?? {},
        {
            memoDependencies: [value],
            onMemo: (d: Partial<PhoneProps>) => {
                const v = value ?? d;
                return {
                    ...v,
                    tel: `${v.code ?? ""} ${v.number ?? ""}`,
                };
            },
        },
    );

    const [phones, setPhones] = useState<CountryProps[]>([]);
    const loadPhones = async () => {
        let countrys: CountryProps[] = await getDataCountrys();
        if (parseCountrys) {
            countrys = parseCountrys(countrys);
        }
        setPhones(countrys);
        setlLoadPhoneCodes(true);
    };
    useEffect(() => {
        loadPhones();
    }, [parseCountrys]);

    const { error: errorFenext } = useValidator({
        data: data,
        validator: validator ?? FenextjsValidator(),
    });

    const getCountryPhone = (d: Partial<PhoneProps> | undefined) => {
        return (
            d?.country ??
            (d?.code_country
                ? phones.find((e) => e.code == d?.code_country)
                : undefined) ??
            (d?.code ? phones.find((e) => e.code_phone == d?.code) : undefined)
        );
    };

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
                        key={`${defaultValue?.code_country}-${defaultValue?.code}-${value?.code}-${phones.length}`}
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
                        defaultValue={getCountryPhone(defaultValue)}
                        value={getCountryPhone(value)}
                        onChange={(e) => {
                            if (e?.code_phone) {
                                const v = {
                                    code: e?.code_phone,
                                    country: e,
                                    code_country: e?.code,
                                    img: e
                                        ? `${getRuteCountryImg(e)}`
                                        : undefined,
                                };
                                onConcatData({
                                    ...v,
                                });
                                onChange?.({
                                    ...data,
                                    ...v,
                                });
                            }
                        }}
                        regExp={/[^0-9+-]/g}
                        regExpReplace=""
                        icon={<></>}
                        // changeByFirstOptionInOnBlur={true}
                        optional={false}
                        showOptionIconImg={true}
                        itemMaxLengthShowOptions={{
                            id: "fenext-item-max-length-show-options",
                            text: "...",
                        }}
                    />
                </div>
                <div
                    className={`fenext-input-phone-text ${classNamePhoneNumber}`}
                >
                    <InputText
                        {...classNameInputNumber}
                        {...props}
                        type="text"
                        onChange={(n) => {
                            onChangeData("number")(n);
                            onChange?.({
                                ...data,
                                number: n,
                            });
                        }}
                        loader={!loadPhoneCodes || loader}
                        disabled={!loadPhoneCodes || disabled}
                        placeholder={placeholder}
                        defaultValue={data?.number}
                        value={data?.number}
                        _t={_t}
                        validator={validator?.getObjectValidator?.()?.number}
                        inputMode="numeric"
                        regExpReplace=""
                        regExp={/[^0-9]/g}
                        optional={false}
                        error={undefined}
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
