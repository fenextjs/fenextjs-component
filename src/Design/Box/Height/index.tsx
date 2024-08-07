import { use_T } from "fenextjs-hook";
import { InputSelectT } from "../../../Input/SelectT";
import { InputNumberCount } from "../../../Input/NumberCount";
import React from "react";
import { Text } from "../../../Text";
import {
    ConstDesignBoxHeightUnit,
    DesignBoxUseDataProps,
    DesignBoxValue,
} from "../boxUnit";
/**
 * Properties for the base DesignBoxHeight component.
 */
export interface DesignBoxHeightProps extends DesignBoxUseDataProps {
    textHeight?: string;
    textMinHeight?: string;
    textMaxHeight?: string;
}

export const DesignBoxHeight = ({
    textHeight = "Height",
    textMinHeight = "Min Height",
    textMaxHeight = "Max Height",

    data,
    onChangeData,
    ...props
}: DesignBoxHeightProps) => {
    const { _t } = use_T({ ...props });
    const _p = (e) => ({ id: `${e}`, text: `${e}`, data: e });

    return (
        <>
            <div
                className={`fenext-design-box-item fenext-design-box-item-2-2`}
            >
                <Text>{_t(textHeight)}</Text>
                <InputNumberCount
                    defaultValue={data.height}
                    onChange={onChangeData("height")}
                    symbolInit=""
                    symbolFinal={data.heightUnit}
                    placeholder="Height"
                />
                <InputSelectT<DesignBoxValue["heightUnit"]>
                    onParse={_p}
                    options={[...ConstDesignBoxHeightUnit]}
                    defaultValue={data.heightUnit}
                    onChange={onChangeData("heightUnit")}
                    placeholder="Height"
                />
            </div>
            <div
                className={`fenext-design-box-item fenext-design-box-item-2-2`}
            >
                <Text>{_t(textMaxHeight)}</Text>
                <InputNumberCount
                    defaultValue={data.maxHeight}
                    onChange={onChangeData("maxHeight")}
                    symbolInit=""
                    symbolFinal={data.maxHeightUnit}
                    placeholder="Max Height"
                />
                <InputSelectT<DesignBoxValue["maxHeightUnit"]>
                    onParse={_p}
                    options={[...ConstDesignBoxHeightUnit]}
                    defaultValue={data.maxHeightUnit}
                    onChange={onChangeData("maxHeightUnit")}
                    placeholder="Max Height"
                />
            </div>
            <div
                className={`fenext-design-box-item fenext-design-box-item-2-2`}
            >
                <Text>{_t(textMinHeight)}</Text>
                <InputNumberCount
                    defaultValue={data.minHeight}
                    onChange={onChangeData("minHeight")}
                    symbolInit=""
                    symbolFinal={data.minHeightUnit}
                    placeholder="Min Height"
                />
                <InputSelectT<DesignBoxValue["minHeightUnit"]>
                    onParse={_p}
                    options={[...ConstDesignBoxHeightUnit]}
                    defaultValue={data.minHeightUnit}
                    onChange={onChangeData("minHeightUnit")}
                    placeholder="Min Height"
                />
            </div>
        </>
    );
};
