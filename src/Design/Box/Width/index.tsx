import { use_T } from "fenextjs-hook";
import { InputSelectT } from "../../../Input/SelectT";
import { InputNumberCount } from "../../../Input/NumberCount";
import React from "react";
import { Text } from "../../../Text";
import {
    ConstDesignBoxWidthUnit,
    DesignBoxUseDataProps,
    DesignBoxValue,
} from "../boxUnit";

/**
 * Properties for the base DesignBoxWidth component.
 */
export interface DesignBoxWidthProps extends DesignBoxUseDataProps {
    textWidth?: string;
    textMinWidth?: string;
    textMaxWidth?: string;
}

export const DesignBoxWidth = ({
    textWidth = "Width",
    textMinWidth = "Min Width",
    textMaxWidth = "Max Width",

    data,
    onChangeData,
    ...props
}: DesignBoxWidthProps) => {
    const { _t } = use_T({ ...props });
    const _p = (e) => ({ id: `${e}`, text: `${e}`, data: e });

    return (
        <>
            <div
                className={` fenext-design-box-item fenext-design-box-item-2-2`}
            >
                <Text>{_t(textWidth)}</Text>
                <InputNumberCount
                    defaultValue={data.width}
                    onChange={onChangeData("width")}
                    symbolInit=""
                    symbolFinal={data.widthUnit}
                    placeholder="Width"
                />
                <InputSelectT<DesignBoxValue["widthUnit"]>
                    onParse={_p}
                    options={[...ConstDesignBoxWidthUnit]}
                    defaultValue={data.widthUnit}
                    onChange={onChangeData("widthUnit")}
                    placeholder="Width"
                />
            </div>
            <div
                className={`fenext-design-box-item fenext-design-box-item-2-2`}
            >
                <Text>{_t(textMaxWidth)}</Text>
                <InputNumberCount
                    defaultValue={data.maxWidth}
                    onChange={onChangeData("maxWidth")}
                    symbolInit=""
                    symbolFinal={data.maxWidthUnit}
                    placeholder="Max Width"
                />
                <InputSelectT<DesignBoxValue["maxWidthUnit"]>
                    onParse={_p}
                    options={[...ConstDesignBoxWidthUnit]}
                    defaultValue={data.maxWidthUnit}
                    onChange={onChangeData("maxWidthUnit")}
                    placeholder="Max Width"
                />
            </div>
            <div
                className={`fenext-design-box-item fenext-design-box-item-2-2`}
            >
                <Text>{_t(textMinWidth)}</Text>
                <InputNumberCount
                    defaultValue={data.minWidth}
                    onChange={onChangeData("minWidth")}
                    symbolInit=""
                    symbolFinal={data.minWidthUnit}
                    placeholder="Min Width"
                />
                <InputSelectT<DesignBoxValue["minWidthUnit"]>
                    onParse={_p}
                    options={[...ConstDesignBoxWidthUnit]}
                    defaultValue={data.minWidthUnit}
                    onChange={onChangeData("minWidthUnit")}
                    placeholder="Min Width"
                />
            </div>
        </>
    );
};
