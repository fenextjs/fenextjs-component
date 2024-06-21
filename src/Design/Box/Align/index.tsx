import { _tValidate } from "fenextjs-functions";
import { InputSelectT } from "../../../Input/SelectT";
import { _TProps } from "fenextjs-interface";
import React, { useMemo } from "react";
import { Text } from "../../../Text";
import { DesignBoxUseDataProps, DesignBoxValue, DesignBoxValueProps, ConstDesignBoxJustifyContentUnit, ConstDesignBoxAlignItemsUnit } from "../boxUnit";
import { useData } from "fenextjs-hook";

/**
 * Properties for the base DesignBoxAlign component.
 */
export interface DesignBoxAlignProps extends DesignBoxUseDataProps {
    textAlignItems?: string;
    textJustifyContent?: string
}

export const DesignBoxAlign = ({
    _t,
    textAlignItems = "Align Vertical",
    textJustifyContent = "Align Horizontal",

    defaultValue = {},
    value,
    onChange,
}: DesignBoxAlignProps) => {
    const {
        data: data_,
        onChangeData,
    } = useData<DesignBoxValueProps>(defaultValue, {
        onChangeDataAfter: onChange,
    });

    const data = useMemo(() => value ?? data_, [value, data_]);

    const _p = (e) => ({ id: `${e}`, text: `${e}`, data: e });


    return (
        <>
            <div className={` fenext-design-box-item fenext-design-box-item-1-2`}>
                <Text>{_tValidate(textAlignItems, _t)}</Text>
                <InputSelectT<DesignBoxValue["alignItems"]>
                    onParse={_p}
                    options={[...ConstDesignBoxAlignItemsUnit]}
                    defaultValue={data.alignItems}
                    onChange={onChangeData("alignItems")}
                    placeholder={textAlignItems}
                />
            </div>
            <div className={` fenext-design-box-item fenext-design-box-item-1-2`}>
                <Text>{_tValidate(textJustifyContent, _t)}</Text>
                <InputSelectT<DesignBoxValue["justifyContent"]>
                    onParse={_p}
                    options={[...ConstDesignBoxJustifyContentUnit]}
                    defaultValue={data.justifyContent}
                    onChange={onChangeData("justifyContent")}
                    placeholder={textJustifyContent}
                />
            </div>
        </>
    );
};
