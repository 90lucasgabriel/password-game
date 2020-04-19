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
      return {
        ...state,
        list: [],
      };
    }

    default:
      return state;
  }
}
