const INITIAL_STATE = {
  list: [
    {
      value: '',
      right: 0,
      wrongPosition: 0,
      wrong: 0,
    },
  ],
};

export default function reducer(
  state = {
    list: [],
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

    case 'RESET_ANSWER': {
      console.log('RESET', state)
      return {
        ...state,
        list: [],
      };
    }

    default:
      return state;
  }
}
