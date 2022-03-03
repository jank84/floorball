export enum Direction {
  Up,
  Down,
  Left,
  Right
};

export enum Goal_shot {
  Scored, Block_goalkeeper,Block_player, Miss
};

export interface Line {
  start_x: number;
  start_y: number;
  end_x: number;
  end_y: number;
}

export enum Field_side_shot {
  Left, Right
}

export const goal_icons = {
  Scored: "🟢",
  Block_goalkeeper: "🟥",
  Block_player: "⬜",
  Miss: "🔻"
}