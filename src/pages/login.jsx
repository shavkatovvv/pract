import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useGetLoginMutation } from "../redux/service/login";
import { loadState } from "../config/storege";
import { createUser } from "../redux/reducer/user-reducer";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export const Login = () => {
    const { handleSubmit, reset, register } = useForm();
    const navigate = useNavigate();
    const [getLogin] = useGetLoginMutation();
    const dispatch = useDispatch();

    const submit = (data) => {
        getLogin(data)
            .unwrap()
            .then((res) => {
                if (res) {
                    dispatch(createUser(res));
                }
                navigate("/app");
                toast.success(`success login ${res.user.name}`);
            })
            .catch((error) => {
                toast.error(error.data);
            });
    };
    return (
        <section>
            <div className="container">
                <div>
                    <div className="absolute rounded-[20px] w-[550px] p-[20px] bg-cyan-300 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
                        <h1 className="text-center text-[20px] font-medium text-gray-500">
                            LOGIN
                        </h1>
                        <Link
                            className="text-[25px] font-semibold text-red-500"
                            to={"/register"}
                        >
                            Register
                        </Link>
                        <form
                            onSubmit={handleSubmit(submit)}
                            className="mt-[20px]"
                        >
                            <div className="mt-[20px] ">
                                <input
                                    className="p-[10px] w-full rounded-[20px]"
                                    type="email"
                                    {...register("email")}
                                    placeholder="email"
                                />
                            </div>
                            <div className="mt-[20px] mb-[20px]">
                                <input
                                    className="p-[10px] w-full rounded-[20px]"
                                    type="password"
                                    {...register("password")}
                                    placeholder="password"
                                />
                            </div>
                            <button className="p-[10px] bg-teal-500 w-full text-[20px] font-medium text-white rounded-[10px]">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
