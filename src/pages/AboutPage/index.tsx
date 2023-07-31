import { Button } from "antd";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import InputNumberCustom from "../../components/common/InputNumber";
import InputText from "../../components/common/InputText";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { authRepository } from "../../repositories";
import { increment } from "../../store/counterSlice";

export default function AboutPage() {
    const count = useAppSelector((state) => state.counter.value);
    console.log("🚀 ~ count:", count);
    const dispatch = useAppDispatch();

    const create = () => {
        dispatch(increment());
    };

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    useEffect(() => {
        authRepository
            .login()
            .then((res) => {
                {
                    console.log("res", res);
                }
            })
            .catch((err) => {
                console.log("err", err);
            });
    }, []);

    return (
        <div>
            <h1>Vite + React</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputText
                    label="test"
                    name="test"
                    control={control}
                    defaultData="123"
                    rules={{
                        required: "Username is required",
                        minLength: {
                            value: 3,
                            message:
                                "Username must be at least 3 characters long",
                        },
                    }}
                />

                <InputNumberCustom
                    label="test1"
                    name="test1"
                    control={control}
                    defaultData={123}
                    rules={{
                        required: "Username is required",
                        minLength: {
                            value: 3,
                            message:
                                "Username must be at least 3 characters long",
                        },
                    }}
                />

                <Button onClick={create} type="primary" htmlType="submit">
                    Primary Button
                </Button>
            </form>
        </div>
    );
}
