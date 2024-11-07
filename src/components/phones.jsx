import React from "react";
import { useGetPhonesQuery } from "../redux/service/phone";

export const Phones = () => {
    const { data } = useGetPhonesQuery();
    return (
        <ul className="flex items-center gap-[20px] flex-wrap justify-center py-[80px]">
            {data?.map((item) => (
                <li
                    className="w-[500px] h-[350px] rounded-[20px] p-[20px] bg-teal-500 text-center flex flex-col items-center justify-center gap-[15px]"
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
                    <button className="bg-green-500 rounded-[10px] px-[30px] text-white text-[20px] font-medium py-[8px]">
                        ADD
                    </button>
                </li>
            ))}
        </ul>
    );
};
