import React, { FC } from 'react';

import * as S from './Profile.styles';
import { useLocation } from "react-router-dom";
import { useGetUserByIdQuery } from "../../services/userService";


export const Profile:FC = () => {
  const location = useLocation();

  const getUserId = () => {
    return location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
  }

  const id = getUserId();

  const { data, isLoading } = useGetUserByIdQuery({
    userId: id
  });

  console.log({ data })

  return (
    <S.ProfilePageWrapper>
      {data ? <h1 className="user-id">User {getUserId()}</h1> : !isLoading && <h1 className="user-id">User not found!</h1> }
      { isLoading ? "Is Loading..." :
          <div>
            { JSON.stringify(data) }
          </div>
      }
    </S.ProfilePageWrapper>
  )
}