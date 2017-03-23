// import {
//   TOGGLE_REGISTER_A_VAR_0,
//
// } from './constants';

export const stand = (state = {
  control: {

  },
  operationsValue: {
    val_0: false,
    val_1: false,
    val_2: false,
    val_3: false,
  },
  registers: {
    a: {
      mode: {
        v_1: {
          false,
        },
        v_0: {
          false,
        },
        d: {
          false,
        }
      },
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
        q_0: false,
        q_1: false,
        q_2: false,
        q_3: false,
        q_4: false,
        q_5: false,
        q_6: false,
        q_7: false,
      }
    },
    b: {
      mode: {
        v_1: {
          false,
        },
        v_0: {
          false,
        },
        d: {
          false,
        }
      },
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
        q_0: false,
        q_1: false,
        q_2: false,
        q_3: false,
        q_4: false,
        q_5: false,
        q_6: false,
        q_7: false,
      }
    },
    c: {
      mode: {
        v_1: {
          false,
        },
        v_0: {
          false,
        },
        d: {
          false,
        }
      },
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
        q_0: false,
        q_1: false,
        q_2: false,
        q_3: false,
        q_4: false,
        q_5: false,
        q_6: false,
        q_7: false,
      }
    }
  },
  adders: {
    adder0: {
      input: {
        a: false,
        b: false,
        c: false,
      },
      output: {
        s: false,
        p: false,
      }
    },
    adder1: {
      input: {
        a: false,
        b: false,
        c: false,
      },
      output: {
        s: false,
        p: false,
      }
    },
    adder2: {
      input: {
        a: false,
        b: false,
        c: false,
      },
      output: {
        s: false,
        p: false,
      }
    },
    adder3: {
      input: {
        a: false,
        b: false,
        c: false,
      },
      output: {
        s: false,
        p: false,
      }
    },
    adder4: {
      input: {
        a: false,
        b: false,
        c: false,
      },
      output: {
        s: false,
        p: false,
      }
    },
    adder5: {
      input: {
        a: false,
        b: false,
        c: false,
      },
      output: {
        s: false,
        p: false,
      }
    },
    adder6: {
      input: {
        a: false,
        b: false,
        c: false,
      },
      output: {
        s: false,
        p: false,
      }
    },
    adder7: {
      input: {
        a: false,
        b: false,
        c: false,
      },
      output: {
        s: false,
        p: false,
      }
    },
  }
}, action) => {
  switch (action.type) {
    case '':
      return {...state, var0: action.payload};
    default:
      return state;
  }
};
