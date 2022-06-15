import React, {FC} from 'react';

//styles
import * as S from './Users.styles';

//api
import { useGetUsersQuery, useDeleteUserByIdMutation } from "../../services/userService";
import { Table } from "../../components/Table";

export const Users:FC = () => {
    const { data, isLoading } = useGetUsersQuery({});

    const [deleteUserById] = useDeleteUserByIdMutation()

    const handleDeleteUser = async (userId: any) => {
        await deleteUserById(userId)
        window.location.reload()
    }

    return (
        <S.UsersPageWrapper>
            { !isLoading && !data && <h1>Users Not Found</h1> }
            { isLoading ? "Is Loading..." : data && <Table tableName="Users" list={data} edit={true} deleteFunc={handleDeleteUser}/> }
        </S.UsersPageWrapper>
    );
}

