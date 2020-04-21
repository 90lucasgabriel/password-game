export default function reducer(
  state = {
    list: [],
    value: '',
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
