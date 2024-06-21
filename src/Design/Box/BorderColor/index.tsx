import { _tValidate } from "fenextjs-functions";
import React from "react";
import { Text } from "../../../Text";
import { DesignBoxUseDataProps } from "../boxUnit";
import { InputColor } from "../../../Input/Color";

/**
 * Properties for the base DesignBoxBorderColor component.
 */
export interface DesignBoxBorderColorProps extends DesignBoxUseDataProps {
    textBorderColor?: string;
}

export const DesignBoxBorderColor = ({
    _t,
    textBorderColor = "Border Color",

    data,
    onChangeData,
}: DesignBoxBorderColorProps) => {

    return (
        <>
            <div
                className={`fenext-design-box-item fenext-design-box-item-1-2`}
            >
                <Text>{_tValidate(textBorderColor, _t)}</Text>
                <InputColor
                    value={data.borderColor}
                    onChange={onChangeData("borderColor")}
                />
            </div>
        </>
    );
};
