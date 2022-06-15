import React, { FC } from "react";
import { Outlet } from "react-router-dom";

import { Navbar } from "../../Navbar";

//styles
import * as S from "./DashboardLayout.styles";


type DashboardLayoutProps = {
    children: JSX.Element,
};

export const DashboardLayout:FC<DashboardLayoutProps> = ({ children }) => {
    return (
        <S.DashboardWrapper>
            <Navbar />
            <S.Content>
                <Outlet />
            </S.Content>
        </S.DashboardWrapper>
    );
};