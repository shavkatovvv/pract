import React from "react";
import { loadState } from "../config/storege";
import { Navigate, Outlet } from "react-router-dom";

export const MainLayout = () => {
    const accessToken = loadState("user");
    console.log(accessToken);
    if (!accessToken.accessToken) {
        return <Navigate replace to={"/"} />;
    }
    return (
        <>
            <header className="bg-blue-500 py-[50px]">
                <div className="container">
                    <div className="flex justify-center items-center">
                        <h1 className="text-[20px] font-medium text-white">
                            HEADER
                        </h1>
                    </div>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
};
