import {
  FETCH_THEME,
  BEGIN_STAND,
  BEGIN_TEST
} from './constants';

export const theme = (state = {
  theme: {
    name:'',
    description: '',
    id:0,
    stand_sample:{
      name:'',
      description: '',
      id:0,
      status_for_current_user: ''
    },
    theory: {
      name:'',
      document: { url: '' },
      id:0
    },
    quiz_sample: {
      name:'',
      id:0
    }
  },
}, action) => {
  switch (action.type) {
    case FETCH_THEME:
      return {...state, theme: action.theme};
    case BEGIN_STAND:
      return {...state};
    case BEGIN_TEST:
      return {...state};
    default:
      return state;
  }
}
