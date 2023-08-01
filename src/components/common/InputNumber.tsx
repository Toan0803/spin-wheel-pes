import { InputNumber } from "antd";
import { Controller } from "react-hook-form";

export interface InputNumberType {
    label?: string;
    name: string;
    control: any;
    defaultData?: number;
    placeholder?: string;
    errors?: any;
    rules?: { [key: string]: any };
    prefix?: any;
    suffix?: any;
    disabled?: boolean;
    min?: number;
    max?: number;
}

export default function InputNumberCustom({
    label,
    name,
    control,
    defaultData,
    placeholder,
    errors,
    rules,
    prefix,
    suffix,
    disabled,
    min,
    max,
}: InputNumberType) {
    return (
        <div>
            <label>
                {label}
                <Controller
                    name={name}
                    control={control}
                    defaultValue={defaultData}
                    rules={rules}
                    render={({ field }) => (
                        <InputNumber
                            status={(errors && errors[name]) || ""}
                            placeholder={placeholder}
                            prefix={prefix}
                            suffix={suffix}
                            disabled={disabled}
                            min={min}
                            max={max}
                            {...field}
                        />
                    )}
                />
                {errors && errors[name] && <p>{errors[name]?.message}</p>}
            </label>
        </div>
    );
}
