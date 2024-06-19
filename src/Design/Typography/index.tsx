import { _tValidate } from "fenextjs-functions";
import { InputText } from "../../Input/Text";
import { _TProps } from "fenextjs-interface";
import React from "react";
import { Edit } from "fenextjs-svg";
import { Collapse } from "../../Collapse/Simple";

/**
 * Properties for the base DesignTypography component.
 */
export interface DesignTypographyBaseProps extends _TProps { }

/**
 * Properties for the class of the DesignTypography component.
 */
export interface DesignTypographyClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}

/**
 * Properties for the DesignTypography component.
 */
export interface DesignTypographyProps extends DesignTypographyBaseProps, DesignTypographyClassProps { }

export const DesignTypography = ({ className = "", _t }: DesignTypographyProps) => {
    return (
        <>
            <div className={`fenext-design-typography ${className} `}>
                <Collapse 
                    header={<>
                        {_tValidate("Typography", _t)}
                    </>}
                    iconArrow={<>
                        <Edit />
                    </>}
                    rotateIcon={false}
                >
                    daya
                </Collapse>
            </div>
        </>
    );
};
