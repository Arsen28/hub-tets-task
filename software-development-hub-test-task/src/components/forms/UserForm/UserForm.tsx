import React, {FC} from "react";
import * as S from "./UserForm.styles";

//Interfaces
import IUser from "../../../interfaces/IUser";

type UserFormProps = {
    type: string,
    userData?: IUser
}

export const UserForm:FC<UserFormProps> = ({ type }) => {
    return (
        <S.UserFormWrapper>
        </S.UserFormWrapper>
    );
}