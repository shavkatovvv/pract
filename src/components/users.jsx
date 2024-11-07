import React from "react";
import { useGetCompsQuery } from "../redux/service/computer";
import { Phones } from "./phones";
import { removeUser } from "../redux/reducer/user-reducer";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadState, saveState } from "../config/storege";
import { addProd } from "../redux/reducer/product-reducer";

export const UsersCard = () => {
    const { data, isLoading } = useGetCompsQuery();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const EXIT = () => {
        const user = loadState("user");

        if (user) {
            saveState("user", null);
            dispatch(removeUser());
            navigate("/");
        }
    };

    const ADD = (item) => {
        dispatch(addProd(item));
    };

    return (
        <>
            <div className="w-[400px] ml-auto pt-[50px]">
                <button
                    onClick={EXIT}
                    className="text-red-500 text-[20px] font-semibold"
                >
                    EXIT
                </button>
            </div>
            <ul className="flex items-center gap-[20px] flex-wrap justify-center py-[80px]">
                {data?.map((item) => (
                    <li
                        className="w-[500px] h-[450px] rounded-[20px] p-[20px] bg-teal-500 text-center flex flex-col items-center justify-center gap-[15px]"
                        key={item.id}
                    >
                        <img
                            className="w-[300px] h-[200px] rounded-[20px]"
                            src={item.img}
                            alt=""
                        />

                        <h2 className="text-[20px] font-medium text-white w-[300px]">
                            {item.title}
                        </h2>
                        <button
                            onClick={() => ADD(item)}
                            className="bg-green-500 rounded-[10px] px-[30px] text-white text-[20px] font-medium py-[8px]"
                        >
                            ADD
                        </button>
                    </li>
                ))}
            </ul>
            <Phones />
        </>
    );
};
