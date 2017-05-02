import update from 'react-addons-update';
import {
  CHANGE_REGISTER_STATE,
  CHANGE_ADDER_STATE,
  CHANGE_OPERATION_VALUE,
  CHANGE_VARIABLE,
  CHANGE_CHART,
  WRITE_MODE,
  SET_WORD,
  PROGRAMM_MODE,
} from './constants';

let initialState = {
    write:false,
    hard:false,
    programm: {
      '0000':'',
      '0001':'',
      '0010':'',
      '0011':'',
      '0100':'',
      '0101':'',

    },
    chart:  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    variables: {
      a: { v_0:false, v_1:false, v_2:false, v_3:false, v_4:false, v_5:false, v_6:false, v_7:false },
      b: { v_0:false, v_1:false, v_2:false, v_3:false, v_4:false, v_5:false, v_6:false, v_7:false },
    },
    operationsValue: { val_0: false, val_1: false, val_2: false, val_3: false, },
    registers: {
      a: {
        mode: { v_1: false, v_0: false, d: false, },
        input: {
          d_0: false,
          d_1: false,
          d_2: false,
          d_3: false,
          d_4: false,
          d_5: false,
          d_6: false,
          d_7: false,
        },
        output: {
          d_0: false,
          d_1: false,
          d_2: false,
          d_3: false,
          d_4: false,
          d_5: false,
          d_6: false,
          d_7: false,
        }
      },
      b: {
        mode: { v_1: false, v_0: false, d: false, },
        input: {
          d_0: false,
          d_1: false,
          d_2: false,
          d_3: false,
          d_4: false,
          d_5: false,
          d_6: false,
          d_7: false,
        },
        output: {
          d_0: false,
          d_1: false,
          d_2: false,
          d_3: false,
          d_4: false,
          d_5: false,
          d_6: false,
          d_7: false,
        }
      },
      c: {
        mode: { v_1: false, v_0: false, d: false, },
        input: {
          d_0: false,
          d_1: false,
          d_2: false,
          d_3: false,
          d_4: false,
          d_5: false,
          d_6: false,
          d_7: false,
        },
        output: {
          d_0: false,
          d_1: false,
          d_2: false,
          d_3: false,
          d_4: false,
          d_5: false,
          d_6: false,
          d_7: false,
        }
      }
    },
    adders: {
      adder0: {
        input: { a: false, b: false, c: false, },
        output: { s: false, p: false, }
      },
      adder1: {
        input: { a: false, b: false, c: false, },
        output: { s: false, p: false, }
      },
      adder2: {
        input: { a: false, b: false, c: false, },
        output: { s: false, p: false, }
      },
      adder3: {
        input: { a: false, b: false, c: false, },
        output: { s: false, p: false, }
      },
      adder4: {
        input: { a: false, b: false, c: false, },
        output: { s: false, p: false, }
      },
      adder5: {
        input: { a: false, b: false, c: false, },
        output: { s: false, p: false, }
      },
      adder6: {
        input: { a: false, b: false, c: false, },
        output: { s: false, p: false, }
      },
      adder7: {
        input: { a: false, b: false, c: false, },
        output: { s: false, p: false, }
      },
    }
}

export const stand = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_REGISTER_STATE: {
      if(state.registers[action.name].mode.v_0 === true && state.registers[action.name].mode.v_1 === true  ) {
        return update(state, { registers: {
            [action.name.toLowerCase()]: {
              [action.pinType]: {
                [action.pin]:{ $set:action.value },
              },
              ['output']: {
                [action.pin]:{ $set:action.value },
              },
            },
          }
        });
      } else {
        return update(state, { registers: {
            [action.name.toLowerCase()]: {
              [action.pinType]: {
                [action.pin]:{ $set:action.value },
              },
            },
          }
        });
      }
    }
    case CHANGE_ADDER_STATE: {
      let a = state.adders[action.name.toLowerCase()]['input']['a'];
      let b = state.adders[action.name.toLowerCase()]['input']['b'];
      let c = state.adders[action.name.toLowerCase()]['input']['c'];

      return update(state, { adders: {
          [action.name.toLowerCase()]: {
            [action.part.name]: {
              [action.part.pin]:{ $set:action.part.value }
            },
            ['output']: {
              ['s']:{ $set:action.part.result.s },
              ['p']:{ $set:action.part.result.p },
            }
          }
        }
      });
    }
    case CHANGE_VARIABLE: {
      return update(state, { variables: {
          [action.name.toLowerCase()]: {
            [action.pin]:{ $set:action.value }
          }
        }
      });
    }
    case CHANGE_CHART: {
      return update(state, {
        chart: { $set:action.value }
      });
    }
    case CHANGE_OPERATION_VALUE: {
      return update(state, { operationsValue: {
            [action.pin]:{ $set:action.value }
          }
      });
    }
    case PROGRAMM_MODE: {
      return update(state, { hard: { $set:action.hard }})
    }
    case WRITE_MODE: {
      return update(state, { write: { $set:action.write }})
    }
    case SET_WORD: {
      return update(state, { programm: {
          [action.address]:{ $set:action.word }
        }
      });
    }
    default:
      return state;
  }
};
