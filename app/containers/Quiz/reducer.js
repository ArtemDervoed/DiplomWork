import {
  SEND_QUIZ,
  FETCH_QUIZ
} from './constants';

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
}, action) => {
  switch (action.type) {
    case SEND_QUIZ:
      return {...state};
    case FETCH_QUIZ:
      return {...state, quiz:action.quiz};
    default:
      return state;
  }
}
