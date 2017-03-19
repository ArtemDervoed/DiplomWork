import {
  TOGGLE_REGISTER_C_VAR_0,
  TOGGLE_REGISTER_C_VAR_1,
  TOGGLE_REGISTER_C_VAR_2,
  TOGGLE_REGISTER_C_VAR_3,
  TOGGLE_REGISTER_C_VAR_4,
  TOGGLE_REGISTER_C_VAR_5,
  TOGGLE_REGISTER_C_VAR_6,
  TOGGLE_REGISTER_C_VAR_7,
} from './constants';

export const registerC = (state = {
  var0: false,
  var1: false,
  var2: false,
  var3: false,
  var4: false,
  var5: false,
  var6: false,
  var7: false,
}, action) => {
  switch (action.type) {
    case TOGGLE_REGISTER_C_VAR_0:
      return {...state, isAuthenticated: action.payload};
    case TOGGLE_REGISTER_C_VAR_1:
      return {...state, isAuthenticated: action.payload};
    case TOGGLE_REGISTER_C_VAR_2:
      return {...state, isAuthenticated: action.payload};
    case TOGGLE_REGISTER_C_VAR_3:
      return {...state, isAuthenticated: action.payload};
    case TOGGLE_REGISTER_C_VAR_4:
      return {...state, isAuthenticated: action.payload};
    case TOGGLE_REGISTER_C_VAR_5:
      return {...state, isAuthenticated: action.payload};
    case TOGGLE_REGISTER_C_VAR_6:
      return {...state, isAuthenticated: action.payload};
    case TOGGLE_REGISTER_C_VAR_7:
      return {...state, isAuthenticated: action.payload};
    default:
      return state;
  }
};
