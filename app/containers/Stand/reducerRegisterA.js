import {
  TOGGLE_REGISTER_A_VAR_0,
  TOGGLE_REGISTER_A_VAR_1,
  TOGGLE_REGISTER_A_VAR_2,
  TOGGLE_REGISTER_A_VAR_3,
  TOGGLE_REGISTER_A_VAR_4,
  TOGGLE_REGISTER_A_VAR_5,
  TOGGLE_REGISTER_A_VAR_6,
  TOGGLE_REGISTER_A_VAR_7,
  TOGGLE_REGISTER_B_VAR_0,
} from './constants';

export const registerA = (state = {
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
    case TOGGLE_REGISTER_A_VAR_0:
      return {...state, var0: action.payload};
    case TOGGLE_REGISTER_A_VAR_1:
      return {...state, var1: action.payload};
    case TOGGLE_REGISTER_A_VAR_2:
      return {...state, var2: action.payload};
    case TOGGLE_REGISTER_A_VAR_3:
      return {...state, var3: action.payload};
    case TOGGLE_REGISTER_A_VAR_4:
      return {...state, var4: action.payload};
    case TOGGLE_REGISTER_A_VAR_5:
      return {...state, var5: action.payload};
    case TOGGLE_REGISTER_A_VAR_6:
      return {...state, var6: action.payload};
    case TOGGLE_REGISTER_A_VAR_7:
      return {...state, var7: action.payload};
    default:
      return state;
  }
};