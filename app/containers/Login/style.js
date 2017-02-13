import React from 'react';
import styled  from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 700px;
  margin: 20px auto;
  background-color: rgba(0,0,0,0.1);
  border-radius: 20px;
  padding: 30px;
  & input {
    text-align: center;
    font-size: 28px;
    margin-bottom: 30px;
    border: 1px solid gray;
    border-radius: 5px;
  }
  & label {

  }
`;
export const Label = styled.label`
  font-size: 28px;
  font-family: Lato !important;
`
export const Input = styled.input`
  text-align: center;
  font-size: 28px;
  height: 40px;
  margin-bottom: 20px;
  border: 1px solid gray;
`;
export const Row = styled.div`
  display: flex;
  font-family: Lato;
`;
export const H1 = styled.h1`
  font-family: LatoBold;
  text-align: center;
`;
export const Button = styled.button`
  height: 40px;
  font-size: 28px;
  border: 0;
  border: 1px solid gray;
  background-color: white;
  border-radius: 5px;
  &:hover {
    background-color:gray;
    background-color: rgba(0,0,0,0.1);
    cursor: pointer;
  }
`;
