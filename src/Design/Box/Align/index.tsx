import { use_T } from "fenextjs-hook";
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
   
    textAlignItems = "Align Vertical",
    textJustifyContent = "Align Horizontal",

    data,
    onChangeData,
    ...props
}: DesignBoxAlignProps) => {
    const {_t} = use_T({...props})
    const _p = (e) => ({ id: `${e}`, text: `${e}`, data: e });

    return (
        <>
            <div
                className={` fenext-design-box-item fenext-design-box-item-1-2`}
            >
                <Text>{_t(textAlignItems)}</Text>
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
                <Text>{_t(textJustifyContent)}</Text>
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
