export default function reducer(
  state = {
    list: [],
    value: '',
    password: '',
    gameOver: false,
  },
  action
) {
  switch (action.type) {
    case 'ADD_ANSWER': {
      return {
        ...state,
        list: [action.payload, ...state.list],
      };
    }

    case 'ADD_VALUE': {
      return {
        ...state,
        value: `${state.value}${action.payload}`,
      };
    }

    case 'REMOVE_VALUE': {
      return {
        ...state,
        value: action.payload.substring(0, action.payload.length - 1),
      };
    }

    case 'ADD_PASSWORD': {
      return {
        ...state,
        password: action.payload,
      };
    }

    case 'GAME_OVER': {
      return {
        ...state,
        gameOver: action.payload,
      };
    }

    case 'RESET_VALUE': {
      return {
        ...state,
        value: '',
      };
    }

    case 'RESET_ANSWER': {
      return {
        ...state,
        list: [],
      };
    }

    default:
      return state;
  }
}
