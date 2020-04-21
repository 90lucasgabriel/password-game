export default function reducer(
  state = {
    gameOver: false,
  },
  action
) {
  switch (action.type) {
    case 'GAME_OVER': {
      return {
        ...state,
        gameOver: action.payload,
      };
    }
    default:
      return state;
  }
}
