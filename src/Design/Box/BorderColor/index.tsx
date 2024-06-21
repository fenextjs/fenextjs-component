import { _tValidate } from "fenextjs-functions";
import React, { useMemo } from "react";
import { Text } from "../../../Text";
import { DesignBoxUseDataProps, DesignBoxValueProps } from "../boxUnit";
import { useData } from "fenextjs-hook";
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

    defaultValue = {},
    value,
    onChange,
}: DesignBoxBorderColorProps) => {
    const { data: data_, onChangeData } = useData<DesignBoxValueProps>(
        defaultValue,
        {
            onChangeDataAfter: onChange,
        },
    );

    const data = useMemo(() => value ?? data_, [value, data_]);

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
