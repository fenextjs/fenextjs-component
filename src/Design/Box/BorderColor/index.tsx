import { use_T } from "fenextjs-hook";
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
    textBorderColor = "Border Color",

    data,
    onChangeData,
    ...props
}: DesignBoxBorderColorProps) => {
    const { _t } = use_T({ ...props });
    return (
        <>
            <div
                className={`fenext-design-box-item fenext-design-box-item-1-2`}
            >
                <Text>{_t(textBorderColor)}</Text>
                <InputColor
                    value={data.borderColor}
                    onChange={onChangeData("borderColor")}
                />
            </div>
        </>
    );
};
