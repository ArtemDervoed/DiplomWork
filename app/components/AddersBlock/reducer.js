import {
  TOGGLE_VAR_A_ADDER_0,
  TOGGLE_VAR_B_ADDER_0,
  SET_TRANSFER_ADDER_0,
  SET_INPUT_TRANSFER_ADDER_0,
  SET_SUMM_ADDER_0,

  TOGGLE_VAR_A_ADDER_1,
  TOGGLE_VAR_B_ADDER_1,
  SET_TRANSFER_ADDER_1,
  SET_INPUT_TRANSFER_ADDER_1,
  SET_SUMM_ADDER_1,

  TOGGLE_VAR_A_ADDER_2,
  TOGGLE_VAR_B_ADDER_2,
  SET_TRANSFER_ADDER_2,
  SET_INPUT_TRANSFER_ADDER_2,
  SET_SUMM_ADDER_2,

  TOGGLE_VAR_A_ADDER_3,
  TOGGLE_VAR_B_ADDER_3,
  SET_TRANSFER_ADDER_3,
  SET_INPUT_TRANSFER_ADDER_3,
  SET_SUMM_ADDER_3,

  TOGGLE_VAR_A_ADDER_4,
  TOGGLE_VAR_B_ADDER_4,
  SET_TRANSFER_ADDER_4,
  SET_INPUT_TRANSFER_ADDER_4,
  SET_SUMM_ADDER_4,

  TOGGLE_VAR_A_ADDER_5,
  TOGGLE_VAR_B_ADDER_5,
  SET_TRANSFER_ADDER_5,
  SET_INPUT_TRANSFER_ADDER_5,
  SET_SUMM_ADDER_5,

  TOGGLE_VAR_A_ADDER_6,
  TOGGLE_VAR_B_ADDER_6,
  SET_TRANSFER_ADDER_6,
  SET_INPUT_TRANSFER_ADDER_6,
  SET_SUMM_ADDER_6,

  TOGGLE_VAR_A_ADDER_7,
  TOGGLE_VAR_B_ADDER_7,
  SET_TRANSFER_ADDER_7,
  SET_INPUT_TRANSFER_ADDER_7,
  SET_SUMM_ADDER_7,
} from './constants';

export const adders = (state = {
  adder0: {
    a:false,
    b:false,
    p:false,
    c:false,
    s:false
  },
  adder1: {
    a:false,
    b:false,
    p:false,
    c:false,
    s:false
  },
  adder2: {
    a:false,
    b:false,
    p:false,
    c:false,
    s:false
  },
  adder3: {
    a:false,
    b:false,
    p:false,
    c:false,
    s:false
  },
  adder4: {
    a:false,
    b:false,
    p:false,
    c:false,
    s:false
  },
  adder5: {
    a:false,
    b:false,
    p:false,
    c:false,
    s:false
  },
  adder6: {
    a:false,
    b:false,
    p:false,
    c:false,
    s:false
  },
  adder7: {
    a:false,
    b:false,
    p:false,
    c:false,
    s:false
  }
}, action) => {
  switch (action.type) {
    case TOGGLE_VAR_A_ADDER_0:
      return {...state, a: action.payload};
    case TOGGLE_VAR_B_ADDER_0:
      return {...state, b: action.payload};
    case SET_TRANSFER_ADDER_0:
      return {...state, p: action.payload};
    case SET_INPUT_TRANSFER_ADDER_0:
      return {...state, c: action.payload};
    case SET_SUMM_ADDER_0:
      return {...state, s: action.payload};

    case TOGGLE_VAR_A_ADDER_1:
      return {...state, a: action.payload};
    case TOGGLE_VAR_B_ADDER_1:
      return {...state, b: action.payload};
    case SET_TRANSFER_ADDER_1:
      return {...state, p: action.payload};
    case SET_INPUT_TRANSFER_ADDER_1:
      return {...state, c: action.payload};
    case SET_SUMM_ADDER_1:
      return {...state, s: action.payload};

    case TOGGLE_VAR_A_ADDER_2:
      return {...state, a: action.payload};
    case TOGGLE_VAR_B_ADDER_2:
      return {...state, b: action.payload};
    case SET_TRANSFER_ADDER_2:
      return {...state, p: action.payload};
    case SET_INPUT_TRANSFER_ADDER_2:
      return {...state, c: action.payload};
    case SET_SUMM_ADDER_2:
      return {...state, s: action.payload};

    case TOGGLE_VAR_A_ADDER_3:
      return {...state, a: action.payload};
    case TOGGLE_VAR_B_ADDER_3:
      return {...state, b: action.payload};
    case SET_TRANSFER_ADDER_3:
      return {...state, p: action.payload};
    case SET_INPUT_TRANSFER_ADDER_3:
      return {...state, c: action.payload};
    case SET_SUMM_ADDER_3:
      return {...state, s: action.payload};

    case TOGGLE_VAR_A_ADDER_4:
      return {...state, a: action.payload};
    case TOGGLE_VAR_B_ADDER_4:
      return {...state, b: action.payload};
    case SET_TRANSFER_ADDER_4:
      return {...state, p: action.payload};
    case SET_INPUT_TRANSFER_ADDER_4:
      return {...state, c: action.payload};
    case SET_SUMM_ADDER_4:
      return {...state, s: action.payload};

    case TOGGLE_VAR_A_ADDER_5:
      return {...state, a: action.payload};
    case TOGGLE_VAR_B_ADDER_5:
      return {...state, b: action.payload};
    case SET_TRANSFER_ADDER_5:
      return {...state, p: action.payload};
    case SET_INPUT_TRANSFER_ADDER_5:
      return {...state, c: action.payload};
    case SET_SUMM_ADDER_5:
      return {...state, s: action.payload};

    case TOGGLE_VAR_A_ADDER_6:
      return {...state, a: action.payload};
    case TOGGLE_VAR_B_ADDER_6:
      return {...state, b: action.payload};
    case SET_TRANSFER_ADDER_6:
      return {...state, p: action.payload};
    case SET_INPUT_TRANSFER_ADDER_6:
      return {...state, c: action.payload};
    case SET_SUMM_ADDER_6:
      return {...state, s: action.payload};

    case TOGGLE_VAR_A_ADDER_6:
      return {...state, a: action.payload};
    case TOGGLE_VAR_B_ADDER_6:
      return {...state, b: action.payload};
    case SET_TRANSFER_ADDER_6:
      return {...state, p: action.payload};
    case SET_INPUT_TRANSFER_ADDER_6:
      return {...state, c: action.payload};
    case SET_SUMM_ADDER_6:
      return {...state, s: action.payload};
    default:
      return state;
  }
};
