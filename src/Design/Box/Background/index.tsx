import { _tValidate } from "fenextjs-functions";
import React from "react";
import { Text } from "../../../Text";
import { DesignBoxUseDataProps } from "../boxUnit";
import { InputColor } from "../../../Input/Color";

/**
 * Properties for the base DesignBoxBackground component.
 */
export interface DesignBoxBackgroundProps extends DesignBoxUseDataProps {
    textBackground?: string;
}

export const DesignBoxBackground = ({
    _t,
    textBackground = "Background",
    data,
    onChangeData
}: DesignBoxBackgroundProps) => {
    
    return (
        <>
            <div
                className={`fenext-design-box-item fenext-design-box-item-1-2`}
            >
                <Text>{_tValidate(textBackground, _t)}</Text>
                <InputColor
                    value={data.background}
                    onChange={onChangeData("background")}
                />
            </div>
        </>
    );
};
