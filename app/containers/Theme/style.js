import React from 'react';
import styled  from 'styled-components';

export const Section = styled.div`
  width: 600px;
  height: 100%;
  margin: 100px auto;
  margin-bottom: 120px;
  background-color: rgba(0,0,0,0.05);
  border-radius: 5px;
  padding:50px;
  padding-left:50px;
  padding-right:50px;
  box-shadow: 5px 10px 15px rgba(0,0,0,0.3);
  .text-field {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Lato;
  }
`;
export const H1 = styled.h1`
  font-family: LatoBold;
  color: rgba(0,0,0,0.45);
  text-align: center;
  margin-top: 0px;
`;
