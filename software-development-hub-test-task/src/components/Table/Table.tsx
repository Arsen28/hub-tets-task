import React, { FC } from "react";

import * as S from './Table.styles';
import { toUppercaseFirstLetterInSentence } from "../../helpers/helper";
import {useNavigate} from "react-router-dom";

type TableProps = {
    list: Array<any>
    tableName: string
    edit?: boolean
    deleteFunc?: any
}

export const Table:FC<TableProps> = ({ list, tableName, edit, deleteFunc}) => {
    const navigate = useNavigate();

    return (
        <S.StyledTable>
            <caption>{tableName} Table</caption>
            <colgroup>
                <col />
                <col />
                <col />
            </colgroup>
            <thead>
                <tr>
                    {Object.keys(list[0]).map((el, index) => (
                        <th key={index}>{toUppercaseFirstLetterInSentence(el)}</th>
                    ))}
                    { (edit || deleteFunc) && <th>Options</th> }
                </tr>
            </thead>
            <tbody>
            {list.map((item) => (
                <tr key={item.id}>
                    {Object.values(item).map((props: any, index: any) => (
                        typeof props === "boolean"
                            ? <td key={index}>
                                {props ? 'Yes' : "No"}
                              </td>
                            : <td key={index}>
                                {props}
                              </td>
                    ))}
                    <td>
                        { edit && <button onClick={() => navigate(`/users/edit/${item.id}`)}>Edit</button> }
                        { deleteFunc && <button onClick={() => deleteFunc(item.id)}>Delete</button> }
                    </td>
                </tr>
            ))}
            </tbody>
        </S.StyledTable>
    );
}