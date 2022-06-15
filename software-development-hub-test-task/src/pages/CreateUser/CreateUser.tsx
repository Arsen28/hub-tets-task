import React, {FC} from "react";

import {useForm} from "react-hook-form";
//styles
import * as S from "./CreateUser.styles";

import IUser from "../../interfaces/IUser";
import {useCreateUserMutation} from "../../services/userService";
import {useNavigate} from "react-router-dom";

export const CreateUser: FC = () => {
    const navigate = useNavigate();
    const {register, formState: {errors}, handleSubmit} = useForm();
    const [ createUser ] = useCreateUserMutation();

    const onSubmit = async (data: IUser) => {
        await createUser(data);
        navigate("/");
        window.location.reload();
    }

    return (
        <S.CreateUserPageWrapper>
            <form onSubmit={handleSubmit(onSubmit as any)}>
                <S.CreatePageWrapper>
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
                </S.CreatePageWrapper>
            </form>
        </S.CreateUserPageWrapper>
    );

}