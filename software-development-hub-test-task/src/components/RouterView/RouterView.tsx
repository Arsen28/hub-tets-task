import React, { useEffect } from "react";
import { MODE } from "../../config/env";
import router from "./../../router/index";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

export const RouterView = () => {
    useEffect(() => {
        if (MODE === "development") {
            console.group("Router");
            console.log(router);
            console.groupEnd();
        }
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                {router.routes.map((route, index) => {
                        if (route?.meta?.layout) {
                            return (
                             <Route
                                 key={index}
                                 element={
                                     <route.meta.layout>
                                         <Outlet />
                                     </route.meta.layout>}
                             >
                                <Route
                                    path={route.path}
                                    element={<route.component />}
                                />
                            </Route>
                        );
                        } else {
                            return (
                                <Route
                                    path={route.path}
                                    element={<route.component />}
                            />
                        );
                        }
                    })}
        </Routes>
        </BrowserRouter>
    );
};