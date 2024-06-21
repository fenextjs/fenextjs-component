import { _tValidate } from "fenextjs-functions";
import { _TProps } from "fenextjs-interface";
import React, { useMemo } from "react";
import { Text } from "../../../Text";
import { DesignBoxUseDataProps, DesignBoxValueProps } from "../boxUnit";
import { useData } from "fenextjs-hook";
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

    defaultValue = {},
    value,
    onChange,
}: DesignBoxBackgroundProps) => {
    const {
        data: data_,
        onChangeData,
    } = useData<DesignBoxValueProps>(defaultValue, {
        onChangeDataAfter: onChange,
    });

    const data = useMemo(() => value ?? data_, [value, data_]);


    return (
        <>
            <div className={`fenext-design-box-item fenext-design-box-item-1-2`}>
                <Text>{_tValidate(textBackground, _t)}</Text>
                <InputColor
                    value={data.background}
                    onChange={onChangeData("background")}
                />
            </div>
        </>
    );
};
