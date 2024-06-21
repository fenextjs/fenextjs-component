import { _tValidate } from "fenextjs-functions";
import { InputSelectT } from "../../../Input/SelectT";
import React from "react";
import { Text } from "../../../Text";
import {
    DesignBoxUseDataProps,
    DesignBoxValue,
    ConstDesignBoxJustifyContentUnit,
    ConstDesignBoxAlignItemsUnit,
} from "../boxUnit";

/**
 * Properties for the base DesignBoxAlign component.
 */
export interface DesignBoxAlignProps extends DesignBoxUseDataProps {
    textAlignItems?: string;
    textJustifyContent?: string;
}

export const DesignBoxAlign = ({
    _t,
    textAlignItems = "Align Vertical",
    textJustifyContent = "Align Horizontal",

    data,
    onChangeData,
}: DesignBoxAlignProps) => {
    const _p = (e) => ({ id: `${e}`, text: `${e}`, data: e });

    return (
        <>
            <div
                className={` fenext-design-box-item fenext-design-box-item-1-2`}
            >
                <Text>{_tValidate(textAlignItems, _t)}</Text>
                <InputSelectT<DesignBoxValue["alignItems"]>
                    onParse={_p}
                    options={[...ConstDesignBoxAlignItemsUnit]}
                    defaultValue={data.alignItems}
                    onChange={onChangeData("alignItems")}
                    placeholder={textAlignItems}
                />
            </div>
            <div
                className={` fenext-design-box-item fenext-design-box-item-1-2`}
            >
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
