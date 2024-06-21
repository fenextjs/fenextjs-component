import { _tValidate } from "fenextjs-functions";
import { InputSelectT } from "../../../Input/SelectT";
import { InputNumberCount } from "../../../Input/NumberCount";
import React, { useMemo } from "react";
import { Text } from "../../../Text";
import {
    ConstDesignBoxWidthUnit,
    DesignBoxUseDataProps,
    DesignBoxValue,
    DesignBoxValueProps,
} from "../boxUnit";
import { useData } from "fenextjs-hook";

/**
 * Properties for the base DesignBoxWidth component.
 */
export interface DesignBoxWidthProps extends DesignBoxUseDataProps {
    textWidth?: string;
    textMinWidth?: string;
    textMaxWidth?: string;
}

export const DesignBoxWidth = ({
    _t,
    textWidth = "Width",
    textMinWidth = "Min Width",
    textMaxWidth = "Max Width",

    defaultValue = {},
    value,
    onChange,
}: DesignBoxWidthProps) => {
    const { data: data_, onChangeData } = useData<DesignBoxValueProps>(
        defaultValue,
        {
            onChangeDataAfter: onChange,
        },
    );

    const data = useMemo(() => value ?? data_, [value, data_]);

    const _p = (e) => ({ id: `${e}`, text: `${e}`, data: e });

    return (
        <>
            <div
                className={` fenext-design-box-item fenext-design-box-item-2-2`}
            >
                <Text>{_tValidate(textWidth, _t)}</Text>
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
                <Text>{_tValidate(textMaxWidth, _t)}</Text>
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
                <Text>{_tValidate(textMinWidth, _t)}</Text>
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
