import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.header`
  padding: 4em;
  background: papayawhip;
`;
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
`;
export const Img = styled.img`
  height: 250px;
  width:auto;
  margin: 20px;
  box-shadow: 0 0 20px rgba(0,0,0,0.5);
  @media screen and (max-width: 1400px) {
    height: 200px;
    margin: 5px;
  }

`;
export const ArticleRight = styled.article`
  text-align: right;
  font-size: 16px;
  width: 500px;
  margin: 20px;
  @media screen and (max-width: 1400px) {
    font-size: 14px;
    width: 350px;
    margin: 5px;
  }
`;
export const ArticleLeft = styled.article`
  text-align: left;
  font-size: 16px;
  width: 500px;
  margin: 20px;
  @media screen and (max-width: 1400px) {
    font-size: 14px;
    width: 350px;
    margin: 5px;
  }
`;
export const headerStyle = {
  fontSize:56,
  fontWeight:'light',
  textAlign: 'center',
  margin: 50,
  marginBottom:0,
};

export const subHeaderStyle = {
  fontSize:16,
  textAlign: 'center',
  margin: 5,
};
