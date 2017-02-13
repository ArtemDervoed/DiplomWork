import React from 'react';
import styled  from 'styled-components';

export const WrapperHeader = styled.header`
  transition: .5s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  position: statik;
  width: 100%;
  max-width: 1903px;
  min-width: 1024px;
  background-color: #fafafa;
`;

export const HeaderLogo = styled.span`
  padding-left: 20px;
  font-size: 36px;
  & > a {
    font-family: LatoBold;
    color: black;
    text-decoration: none;
  }
`;

export const HeaderButton = styled.span`
  font-family: LatoBold;
  font-size: 16px;
  margin-right: 20px;
  & > a {
    text-decoration: none;
    color: black;
    transition: .5s;
  }
  & > a:hover {
    transition: .5s;
    color: red;
  }
`;
