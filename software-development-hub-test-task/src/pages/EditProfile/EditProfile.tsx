import React, { FC, useEffect } from "react";

import { useForm } from "react-hook-form";
//styles
import * as S from "./EditProfile.styles";

import IUser from "../../interfaces/IUser";
import { useGetUserByIdQuery, useUpdateUserByIdMutation } from "../../services/userService";
import { useNavigate, useParams } from "react-router-dom";

export const EditProfile: FC = () => {
    const navigate = useNavigate();

    const [ updateUserById ] = useUpdateUserByIdMutation();

    const { userId } = useParams()

    console.log({ userId })

    const { data, isLoading } = useGetUserByIdQuery({
        userId
    });

    useEffect(() => {
        const fields = ['first_name', 'last_name', 'birth_date', 'gender', 'job', 'biography', 'is_active'];
        data && fields.forEach(field => setValue(field, data[field]));
    }, [data]);

    const { register, formState: { errors }, handleSubmit, setValue } = useForm();

    const onSubmit = async (data: IUser) => {
        if(userId) await updateUserById({ id: userId, data });
        navigate(`/`);
        window.location.reload();
    }

    return (
        <S.EditUserPageWrapper>
            aaa
            {!isLoading && <form onSubmit={handleSubmit(onSubmit as any)}>
                <S.EditPageWrapper>
                    <S.InputField>
                        <S.InputLabel>
                            First name:
                            <S.InputWrapper>
                                <S.Input
                                    type="text"
                                    className={errors?.first_name ? "error" : undefined}
                                    {...register('first_name', {required: true, maxLength: 256})}
                                />
                                {errors?.first_name?.type === "required" && (
                                    <S.ErrorMessage>
                                        This field may not be blank.
                                    </S.ErrorMessage>
                                )}
                            </S.InputWrapper>
                        </S.InputLabel>
                    </S.InputField>
                    <S.InputField>
                        <S.InputLabel>
                            Last name:
                            <S.InputWrapper>
                                <S.Input
                                    type="text"
                                    className={errors?.last_name ? "error" : undefined}
                                    {...register('last_name', {required: true, maxLength: 256})}
                                />
                                {errors?.last_name?.type === "required" && (
                                    <S.ErrorMessage>
                                        This field may not be blank.
                                    </S.ErrorMessage>
                                )}
                            </S.InputWrapper>
                        </S.InputLabel>
                    </S.InputField>
                    <S.InputField>
                        <S.InputLabel>
                            Birth Date:
                            <S.InputWrapper>
                                <S.Input
                                    type="date"
                                    className={errors?.birth_date ? "error" : undefined}
                                    {...register('birth_date', {required: true})}
                                />
                                {errors?.birth_date?.type === "required" && (
                                    <S.ErrorMessage>
                                        This field may not be blank.
                                    </S.ErrorMessage>
                                )}
                            </S.InputWrapper>
                        </S.InputLabel>
                    </S.InputField>
                    <S.InputField>
                        <S.InputLabel>
                            Gender :
                            <S.InputWrapper>
                                <S.Select
                                    className={errors?.gender ? "error" : undefined}
                                    {...register('gender', {required: true})}
                                >
                                    <S.SelectOption value="male">Male</S.SelectOption>
                                    <S.SelectOption value="female">Female</S.SelectOption>
                                </S.Select>
                                {errors?.gender?.type === "required" && (
                                    <S.ErrorMessage>
                                        This field may not be blank.
                                    </S.ErrorMessage>
                                )}
                            </S.InputWrapper>
                        </S.InputLabel>
                    </S.InputField>
                    <S.InputField>
                        <S.InputLabel>
                            Job :
                            <S.InputWrapper>
                                <S.Input
                                    type="text"
                                    className={errors?.job ? "error" : undefined}
                                    {...register('job', {required: true, maxLength: 30})}
                                />
                                {errors?.job?.type === "required" && (
                                    <S.ErrorMessage>
                                        This field may not be blank.
                                    </S.ErrorMessage>
                                )}
                                {errors?.job?.type === "maxLength" && (
                                    <S.ErrorMessage>
                                        Max length will be 30 symbols.
                                    </S.ErrorMessage>
                                )}
                            </S.InputWrapper>
                        </S.InputLabel>
                    </S.InputField>
                    <S.InputField>
                        <S.InputLabel>
                            Biography :
                            <S.InputWrapper>
                                <S.TextArea
                                    className={errors?.biography ? "error" : undefined}
                                    {...register('biography', {required: true, maxLength: 1024})}
                                />
                                {errors?.biography?.type === "required" && (
                                    <S.ErrorMessage>
                                        This field may not be blank.
                                    </S.ErrorMessage>
                                )}
                            </S.InputWrapper>
                        </S.InputLabel>
                    </S.InputField>
                    <S.InputField>
                        <S.InputLabel>
                            Is Active :
                            <S.InputWrapper>
                                <S.Input
                                    type="checkbox"
                                    className={errors?.is_active ? "error" : undefined}
                                    {...register('is_active', {required: false})}
                                />
                                {errors?.is_active?.type === "required" && (
                                    <S.ErrorMessage>
                                        This field may not be blank.
                                    </S.ErrorMessage>
                                )}
                            </S.InputWrapper>
                        </S.InputLabel>
                    </S.InputField>
                    <button>Post</button>
                </S.EditPageWrapper>
            </form>}
        </S.EditUserPageWrapper>
    );

}