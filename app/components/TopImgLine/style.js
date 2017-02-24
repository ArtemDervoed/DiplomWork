import React from 'react';
import styled  from 'styled-components';
import bgi from './intro-course.png';
export const Section = styled.section`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  left: 0;
  top: 0;
  @media screen and (max-width: 1024px) {
    padding-bottom: 500px;
`;
export const Div_container = styled.div`
  background: url(${bgi});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 170px;
  width: 300px;
  `;
  export const Div_content = styled.div`
    `;
export const H1 = styled.div`
  color: rgba(0,0,0,.3)
  font-size: 36px;
  font-weight: bold;
  line-height: 36px;
  letter-spacing: 2px;
`;
