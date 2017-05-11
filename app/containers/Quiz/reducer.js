import {
  SEND_QUIZ,
  FETCH_QUIZ
} from './constants';
import update from 'react-addons-update';

export const quiz = (state = {
  quiz: {
    id:'',
    quiz_sample: {
      id: '',
      name:'',
      score: '',
      questions: [],
      status_for_current_user: ''
    }
  },
  result: {
    id: '',
    score: '',
    status: '',
  }
}, action) => {
  switch (action.type) {
    case SEND_QUIZ:
    console.log(action.result);
      return update(state, {
          result: { $set:action.result }
      })
    case FETCH_QUIZ:
      return {...state, quiz:action.quiz};
    default:
      return state;
  }
}
