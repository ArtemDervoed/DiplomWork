import {
  FETCH_THEME,
  BEGIN_STAND
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
    }
  },
}, action) => {
  switch (action.type) {
    case FETCH_THEME:
      return {...state, theme: action.theme};
    case BEGIN_STAND:
      return {...state};
    default:
      return state;
  }
}
