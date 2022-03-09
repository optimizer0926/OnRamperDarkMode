import React from 'react';
import type { DateType } from './DatePicker';
declare type InputTextType = {
    disabled?: boolean;
    symbol?: string;
    placeholder?: string;
    label?: string;
    className?: string;
    icon?: string;
    iconPosition?: 'start' | 'end';
    symbolPosition?: 'start' | 'end';
    onChange?: (name: string, value: any, type?: string) => void;
    value?: number | string | DateType;
    type?: string;
    name: string;
    onIconClick?: (name: string, value: string, label: string) => void;
    error?: string;
    hint?: string;
    hintButton?: boolean;
    onHintClick?: () => void;
    clickableIcon?: boolean;
    maxLength?: number;
    info?: string;
    iconTitle?: string;
    isRequired?: boolean;
};
declare const InputText: React.ForwardRefExoticComponent<InputTextType & React.RefAttributes<HTMLDivElement>>;
export default InputText;
