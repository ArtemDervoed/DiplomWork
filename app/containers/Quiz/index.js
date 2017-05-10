import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header/index';
import Footer from 'components/Footer/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Section, H1 } from './style.js';
import RaisedButton from 'material-ui/RaisedButton';
import TextFieldInput from 'components/TextField/index.js';
import QuestionResult from 'components/QuestionResult/index.js';
import Question from 'components/Question/index.js'
import {fetchQuiz, sendQuiz} from './actions.js';
const style = {
  margin: 12,
};

export class Quiz extends React.Component {
  constructor() {
    super();
    this.state = {
      answers:new Set(),
    };
  }
  addAnswer(value) {
    this.setState({answers: this.state.answers.add(value)})
  }
  sendAnswers() {
    let tottalAnswers = [];
    this.state.answers.forEach(answer => {
      tottalAnswers.push({ id:answer });
    });
    let location = this.props.location.pathname.split('/')
    this.props.dispatch(sendQuiz({
      location: '/'+location[1]+'/'+location[2]+'/'+location[3]+'/'+location[4] + '/check_quiz',
      quizer: {
        id:this.props.quiz.quiz.id,
        answers:tottalAnswers,
      }
    }))
  }
  componentWillMount() {
    this.props.dispatch(fetchQuiz({location: this.props.location.pathname}));
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Header/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <Section>
            <Question quizSample={this.props.quiz.quiz.quiz_sample} addAnswer={this.addAnswer.bind(this)}/>
            <RaisedButton label="Завершить" secondary={true} style={style} onClick={this.sendAnswers.bind(this)} />
            <QuestionResult/>
          </Section>
        </MuiThemeProvider>
        <Footer/>
      </div>
    );
  }
}

const	mapStateToProps	=	state	=> ({
  ...state,
});



export default connect(mapStateToProps)(Quiz);
