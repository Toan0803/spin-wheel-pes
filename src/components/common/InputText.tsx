import { Input } from "antd";
import { Controller } from "react-hook-form";

export interface InputTextType {
    label?: string;
    name: string;
    control: any;
    defaultData?: string;
    placeholder?: string;
    errors?: any;
    rules?: { [key: string]: any };
    prefix?: any;
    suffix?: any;
    disabled?: boolean;
}

export default function InputText({
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
}: InputTextType) {
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
                        <Input
                            status={(errors && errors[name]) || ""}
                            placeholder={placeholder}
                            prefix={prefix}
                            suffix={suffix}
                            disabled={disabled}
                            {...field}
                        />
                    )}
                />
                {errors && errors[name] && <p>{errors[name]?.message}</p>}
            </label>
        </div>
    );
}
