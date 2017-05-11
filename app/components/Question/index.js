import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
const styles = {
  block: {
    maxWidth: 1600
  },
  radioButton: {
    marginBottom: 16,
    fontSize:14,
  },
  subheader: {
    fontSize:16,
    marginBottom: 10,
  },
  divider: {
    marginBottom: 10,
  }
};

const QuestionWithOneAnswer = (props) => (
  <div>
    <Subheader style={styles.subheader}>{props.questionHeader}</Subheader>
    <RadioButtonGroup name="tests" onChange={props.onChoosAnswer}>
      {
        props.answers.map((answer, index) => {
          return (
            <RadioButton
               key={index}
               value={answer.id}
               label={answer.content}
               style={styles.radioButton}
             />
          );
        })
      }
    </RadioButtonGroup>
    <Divider style={styles.divider}/>
  </div>
);

const QuestionWithMultipleAnswer = (props) => (
  <div>
    <Subheader style={styles.subheader}>{props.questionHeader}</Subheader>
      {
        props.answers.map((answer, index) => {
          return (
            <Checkbox
               key={index}
               value={answer.id}
               label={answer.content}
               style={styles.radioButton}
               onCheck={props.onChoosAnswer}
             />
          );
        })
      }
      <Divider style={styles.divider}/>
  </div>
);

class Question extends React.Component {
  onChoosAnswer(event, isInputChecked) {
    this.props.addAnswer(event.target.value);
  }
  render() {
    return (
      <div>
        <Subheader style={{fontSize:24}}>{this.props.quizSample.name}</Subheader>
        {
          this.props.quizSample.questions.map((question, index) => {
            if (question.multi_answer) {
              return (
                <QuestionWithMultipleAnswer
                key={index}
                questionHeader={question.content}
                answers={question.answers}
                onChoosAnswer={this.onChoosAnswer.bind(this)}
                />
              )
            }
            if (!question.multi_answer) {
              return (
                <QuestionWithOneAnswer
                  key={index}
                  questionHeader={question.content}
                  answers={question.answers}
                  onChoosAnswer={this.onChoosAnswer.bind(this)}
                />
              )
            }
          })
        }
      </div>
    );
  }
}

const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(Question);
