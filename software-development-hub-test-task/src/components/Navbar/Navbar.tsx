import React from "react";

//styles
import * as S from './Navbar.styles';

//constants
import {NavLink} from "react-router-dom";


export const Navbar = () => {
    return (
        <S.NavbarWrapper>
            <S.NavList>
                <S.NavItem>
                    <NavLink
                        to="/"
                        end={true}
                    >
                        All Users
                    </NavLink>
                </S.NavItem>
                <S.NavItem>
                    <NavLink
                        to="/users/create"
                        end={true}
                    >
                        Create User
                    </NavLink>
                </S.NavItem>
            </S.NavList>
        </S.NavbarWrapper>
    );
}