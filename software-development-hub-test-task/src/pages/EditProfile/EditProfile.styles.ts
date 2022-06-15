import styled from "styled-components";

export const EditUserPageWrapper = styled.div`
  //display: flex;
  //justify-content: center;
  //align-items: center;
  //width: 80%;
`
export const EditPageWrapper  = styled.div `
  display: flex;
  flex-direction: column;
  min-height: 20px;
  padding: 19px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
`

export const ErrorMessage = styled.p `
  font-size: 12px ;
  color: #a94442;
  padding: 0;
  margin: 0 0 15px;
`

export const Input = styled.input`
    margin: 10px;
    padding: 10px 15px;
  
  &[type="checkbox"] {
    margin: 0;
    padding: 0;
  }
`

export const Select = styled.select`
  margin: 10px;
  padding: 10px 15px;
`
export const SelectOption = styled.option`
  display: block;
  padding: 10px 15px;
`

export const TextArea = styled.textarea`
  width: 100%;
  max-width: 702px;
  height: 217px;
  margin: 10px;
  padding: 10px 15px;
`

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

export const InputField = styled.div `
  display: flex;
  width: 100%;
  flex-direction: column;
`

export const InputLabel = styled.label`
    & .error {
      border-color: red;
      outline: none;
    }
`