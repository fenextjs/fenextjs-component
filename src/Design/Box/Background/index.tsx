import { use_T } from "fenextjs-hook";
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
    textBackground = "Background",
    data,
    onChangeData,
    ...props
}: DesignBoxBackgroundProps) => {
    const { _t } = use_T({ ...props });
    return (
        <>
            <div
                className={`fenext-design-box-item fenext-design-box-item-1-2`}
            >
                <Text>{_t(textBackground)}</Text>
                <InputColor
                    value={data.background}
                    onChange={onChangeData("background")}
                />
            </div>
        </>
    );
};
