import React from "react";
import { useGetCompsQuery } from "../redux/service/computer";

export const UsersCard = () => {
    const { data, isLoading } = useGetCompsQuery();
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
                </li>
            ))}
        </ul>
    );
};
