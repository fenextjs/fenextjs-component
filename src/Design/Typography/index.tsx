import { _tValidate } from "fenextjs-functions";
import { InputSelectT } from "../../Input/SelectT";
import { InputNumberCount } from "../../Input/NumberCount";
import { _TProps } from "fenextjs-interface";
import React, { useMemo } from "react";
import { Edit } from "fenextjs-svg";
import { Collapse } from "../../Collapse/Simple";
import { Text } from "../../Text";
import { ConstDesignTypographyDecorationUnit, ConstDesignTypographyFontSizeUnit, ConstDesignTypographyLetterSpacingUnit, ConstDesignTypographyLineHeightUnit, ConstDesignTypographyStyleUnit, ConstDesignTypographyTransformUnit, ConstDesignTypographyWeightUnit, ConstDesignTypographyWordSpacingUnit, DesignTypographyValue } from './fontUnit'
import { useData } from "fenextjs-hook";


/**
 * Properties for the base DesignTypography component.
 */
export interface DesignTypographyValueProps extends Partial<DesignTypographyValue> {

}


/**
 * Properties for the base DesignTypography component.
 */
export interface DesignTypographyProps extends _TProps {
    /**
     * The class name for the component.
     */
    className?: string;


    defaultValue?: DesignTypographyValueProps
    value?: DesignTypographyValueProps
    onChange?: (data: DesignTypographyValueProps) => void

    textTypography?: string
    textSize?: string
    textWeight?: string
    textTransform?: string
    textStyle?: string
    textDecoration?: string
    textLineHeight?: string
    textLetterSpacing?: string
    textWordSpacing?: string

}



export const DesignTypography = ({ className = "", _t,

    textTypography = "Typography",
    textSize = "Size",
    textWeight = "Weight",
    textTransform = "Transform",
    textStyle = "Style",
    textDecoration = "Decoration",
    textLineHeight = "Line Height",
    textLetterSpacing = "Letter Spacing",
    textWordSpacing = "Word Spacing",

    defaultValue = {
        fontSize: 20,
        fontSizeUnit: "px",
        weight: 400,
        transform: "none",
        style: "normal",
        decoration: "normal",
        lineHeight: 1,
        lineHeightUnit: "normal",
        letterSpacing: 0,
        letterSpacingUnit: "px",
        wordSpacing: 5,
        wordSpacingUnit: "px",
    },
    value,
    onChange

}: DesignTypographyProps) => {

    const { data: data_, onChangeData } = useData<DesignTypographyValueProps>(defaultValue, {
        onChangeDataAfter: onChange
    })

    const data = useMemo(() => value ?? data_, [value, data_])

    const _p = (e) => ({ id: `${e}`, text: `${e}`,data:e })

    return (
        <>
            <div className={`fenext-design-typography ${className} `}>
                <Collapse
                    header={<>
                        {_tValidate(textTypography, _t)}
                    </>}
                    iconArrow={<>
                        <Edit />
                    </>}
                    rotateIcon={false}
                >
                    <div className={`fenext-design-typography-content `}>
                        <div className={`fenext-design-typography-item fenext-design-typography-item-3`}>
                            <Text>
                                {_tValidate(textSize, _t)}
                            </Text>
                            <InputNumberCount
                                symbolInit=""
                                symbolFinal={data.fontSizeUnit}
                                defaultValue={data.fontSize}
                                min={0}
                                aplyMin={true}
                                onChange={onChangeData("fontSize")}
                            />
                            <InputSelectT<DesignTypographyValue['fontSizeUnit']>
                                onParse={_p}
                                options={[...ConstDesignTypographyFontSizeUnit]}
                                defaultValue={data.fontSizeUnit}
                                onChange={onChangeData("fontSizeUnit")}
                            />
                        </div>
                        <div className={`fenext-design-typography-item `}>
                            <Text>
                                {_tValidate(textWeight, _t)}
                            </Text>
                            <InputSelectT<DesignTypographyValue['weight']>
                                onParse={_p}
                                options={[...ConstDesignTypographyWeightUnit]}
                                defaultValue={data.weight}
                                onChange={onChangeData("weight")}
                            />
                        </div>
                        <div className={`fenext-design-typography-item `}>
                            <Text>
                                {_tValidate(textTransform, _t)}
                            </Text>
                            <InputSelectT<DesignTypographyValue['transform']>
                                onParse={_p}
                                options={[...ConstDesignTypographyTransformUnit]}
                                defaultValue={data.transform}
                                onChange={onChangeData("transform")}
                            />
                        </div>
                        <div className={`fenext-design-typography-item `}>
                            <Text>
                                {_tValidate(textStyle, _t)}
                            </Text>
                            <InputSelectT<DesignTypographyValue['style']>
                                onParse={_p}
                                options={[...ConstDesignTypographyStyleUnit]}
                                defaultValue={data.style}
                                onChange={onChangeData("style")}
                            />
                        </div>
                        <div className={`fenext-design-typography-item `}>
                            <Text>
                                {_tValidate(textDecoration, _t)}
                            </Text>
                            <InputSelectT<DesignTypographyValue['decoration']>
                                onParse={_p}
                                options={[...ConstDesignTypographyDecorationUnit]}
                                defaultValue={data.decoration}
                                onChange={onChangeData("decoration")}
                            />
                        </div>
                        <div className={`fenext-design-typography-item fenext-design-typography-item-3`}>
                            <Text>
                                {_tValidate(textLineHeight, _t)}
                            </Text>
                            <InputNumberCount
                                symbolInit=""
                                symbolFinal={data.lineHeightUnit == "normal" ? "" :data.lineHeightUnit}
                                defaultValue={data.lineHeight}
                                onChange={onChangeData("lineHeight")}
                            />
                            <InputSelectT<DesignTypographyValue['lineHeightUnit']>
                                onParse={_p}
                                options={[...ConstDesignTypographyLineHeightUnit]}
                                defaultValue={data.lineHeightUnit}
                                onChange={onChangeData("lineHeightUnit")}
                            />
                        </div>
                        <div className={`fenext-design-typography-item fenext-design-typography-item-3`}>
                            <Text>
                                {_tValidate(textLetterSpacing, _t)}
                            </Text>
                            <InputNumberCount
                                symbolInit=""
                                symbolFinal={data.letterSpacingUnit}
                                defaultValue={data.letterSpacing}
                                onChange={onChangeData("letterSpacing")}
                            />
                            <InputSelectT<DesignTypographyValue['letterSpacingUnit']>
                                onParse={_p}
                                options={[...ConstDesignTypographyLetterSpacingUnit]}
                                defaultValue={data.letterSpacingUnit}
                                onChange={onChangeData("letterSpacingUnit")}
                            />
                        </div>
                        <div className={`fenext-design-typography-item fenext-design-typography-item-3`}>
                            <Text>
                                {_tValidate(textWordSpacing, _t)}
                            </Text>
                            <InputNumberCount
                                symbolInit=""
                                symbolFinal={data.wordSpacingUnit}
                                defaultValue={data.wordSpacing}
                                onChange={onChangeData("wordSpacing")}
                            />
                            <InputSelectT<DesignTypographyValue['wordSpacingUnit']>
                                onParse={_p}
                                options={[...ConstDesignTypographyWordSpacingUnit]}
                                defaultValue={data.wordSpacingUnit}
                                onChange={onChangeData("wordSpacingUnit")}
                            />
                        </div>
                    </div>
                </Collapse>
            </div>
        </>
    );
};
