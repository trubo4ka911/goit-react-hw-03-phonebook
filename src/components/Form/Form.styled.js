import styled from "@emotion/styled";

export const PhonebookForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;
export const PhonebookLabel = styled.label`
display: flex;
    color: #a3d0c3;
  font-size: 16px;
  vertical-align: middle 
  display: block;
  margin-bottom: 15px;
`;

export const PhonebookField = styled.input`
  margin-bottom: 25px;
  width: 100%;
  border: 1px transparent solid;
  background: #f9f0da;
  height: 42px;
  padding-left: 15px;
  border-radius: 10px;
  &:focus:not(.focus-visible) {
    outline: 0 !important;
    box-shadow: none !important;
  }
  &:focus,
  &:focus-visible {
    border: 1px #a3d0c3 solid;
  }
`;
export const PhonebookButton = styled.button`
  width: 200px;
  padding: 10px;
  border-radius: 10px;
  background: #a3d0c3;
  border: none;
  color: #f9f0da;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  &:hover,
  &focus {
    color: #a3d0c3;
    background: #f9f0da;
  }
`;
