import { connect } from 'react-redux';
import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Question from 'components/Question/index.js';
class VerticalLinearStepper extends React.Component {

  state = {
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 4,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  renderStepActions(step) {
    const {stepIndex} = this.state;
    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label={stepIndex === 5 ? 'Finish' : 'Next'}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onTouchTap={this.handleNext}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onTouchTap={this.handlePrev}
          />
        )}
      </div>
    );
  }

  render() {
    const {finished, stepIndex} = this.state;
    return (
      <div style={{maxWidth: 380, maxHeight: 400, margin: 'auto'}}>
        <Stepper activeStep={stepIndex} orientation="vertical">
          <Step>
            <StepLabel>Вопрос 1</StepLabel>
            <StepContent>
              <Question/>
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Вопрос 2</StepLabel>
            <StepContent>
              <Question/>
              {this.renderStepActions(1)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Вопрос 3</StepLabel>
            <StepContent>
            <Question/>
              {this.renderStepActions(2)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Вопрос 3</StepLabel>
            <StepContent>
            <Question/>
              {this.renderStepActions(3)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Вопрос 3</StepLabel>
            <StepContent>
            <Question/>
              {this.renderStepActions(4)}
            </StepContent>
          </Step>
        </Stepper>
        {finished && (
          <p style={{margin: '20px 0', textAlign: 'center'}}>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                this.setState({stepIndex: 0, finished: false});
              }}
            >
              Click here
            </a> to reset the example.
          </p>
        )}
      </div>
    );
  }
}
const	mapStateToProps	=	state	=> ({
  ...state,
});
export default connect(mapStateToProps)(VerticalLinearStepper);
