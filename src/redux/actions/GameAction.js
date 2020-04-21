export const GAME_OVER = 'GAME_OVER';

export function gameOverAction(data) {
  return { type: GAME_OVER, payload: data };
}
