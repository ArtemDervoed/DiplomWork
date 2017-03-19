import {
  TOGGLE_REGISTER_B_VAR_0,
  TOGGLE_REGISTER_B_VAR_1,
  TOGGLE_REGISTER_B_VAR_2,
  TOGGLE_REGISTER_B_VAR_3,
  TOGGLE_REGISTER_B_VAR_4,
  TOGGLE_REGISTER_B_VAR_5,
  TOGGLE_REGISTER_B_VAR_6,
  TOGGLE_REGISTER_B_VAR_7,
} from './constants';

export const registerB = (state = {
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
    case TOGGLE_REGISTER_B_VAR_0:
      return {...state, var0: action.payload};
    case TOGGLE_REGISTER_B_VAR_1:
      return {...state, var0: action.payload};
    case TOGGLE_REGISTER_B_VAR_2:
      return {...state, var0: action.payload};
    case TOGGLE_REGISTER_B_VAR_3:
      return {...state, var0: action.payload};
    case TOGGLE_REGISTER_B_VAR_4:
      return {...state, var0: action.payload};
    case TOGGLE_REGISTER_B_VAR_5:
      return {...state, var0: action.payload};
    case TOGGLE_REGISTER_B_VAR_6:
      return {...state, var0: action.payload};
    case TOGGLE_REGISTER_B_VAR_7:
      return {...state, var0: action.payload};
    default:
      return state;
  }
};
