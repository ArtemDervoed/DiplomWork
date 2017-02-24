import React from 'react';
import { Section, Div_container, H1 } from './style'

export default class TopImgLine extends React.Component {
  render() {
    return (
      <Section>
      <H1>{this.props.header}</H1>
      <Div_container/>
      </Section>
    );
  }
}
