import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  height: 42px;
  color: #fff;
  overflow: hidden;
  border-radius: 21px;
  border: 1px solid #82259c;
  padding: 0 10px;

  & input {
    width: 100%;
    height: 42px;
    border: none;
    border-radius: 21px;
    background: transparent;
    outline: none;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 8px;
  margin-left: 10px;
`;
