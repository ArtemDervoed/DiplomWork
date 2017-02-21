import React from 'react';
import styled  from 'styled-components';
import {Tabs, Tab} from 'material-ui/Tabs';

export const Section = styled.div`
  width: 900px;
  margin: 50px auto;
  background-color: rgba(0,0,0,0.05);
  border-radius: 5px;
  padding:25px;
  padding-left:60px;
  padding-right:60px;
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
