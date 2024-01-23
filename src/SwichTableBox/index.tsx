import { _TProps } from "fenextjs-interface";
import React from "react";
import {InputRadio,InputRadioItemProps} from '../Input/Radio'
import {  TableBox } from "fenextjs-svg/cjs/TableBox";
import {  TableList } from "fenextjs-svg/cjs/TableList";


export type SwichTableBoxType = 'box' | 'list'

/**
 * Properties for the base SwichTableBox component.
 */
export interface SwichTableBoxBaseProps extends _TProps {

    /**
     * The class name for the component.
     */
    defaultValue?: SwichTableBoxType;

    /**
     * The class name for the component.
     */
    onChange?: (e?:SwichTableBoxType)=>void;
}

/**
 * Properties for the class of the SwichTableBox component.
 */
export interface SwichTableBoxClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}

/**
 * Properties for the SwichTableBox component.
 */
export interface SwichTableBoxProps extends SwichTableBoxBaseProps, SwichTableBoxClassProps {}

export const SwichTableBox = ({ className = "" ,defaultValue='list',onChange}: SwichTableBoxProps) => {
    const ITEMS: InputRadioItemProps<SwichTableBoxType>[] = [
        {
            id: 'fenext-table-view-list',
            label: (
                <>
                    <div className={`fenext-swich-table-box-item`}>
                        <TableList />
                    </div>
                </>
            ),
            data:'list'
        },
        {
            id: 'fenext-table-view-box',
            label: (
                <>
                    <div className={`fenext-swich-table-box-item`}>
                        <TableBox  />
                    </div>
                </>
            ),
            data:'box'
        },
    ];
    return (
        <div className={`fenext-swich-table-box ${className}`}>
            <InputRadio
                name="fenext-table-view"
                defaultValue={ITEMS[defaultValue=='list' ? 0 : 1]}
                items={ITEMS}
                onChange={(e)=>{
                    onChange?.(e?.data)
                }}
            />
        </div>
    );
};
