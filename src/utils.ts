export enum Direction {
  Up,
  Down,
  Left,
  Right
};

export enum Goal_shot_outcome {
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
  Block_player: "🟧",
  Miss: "⚪"
}
export const goal_line_colors = {
  Scored: "green",
  Block_goalkeeper: "red",
  Block_player: "grey",
  Miss: "lightgrey"
}

export interface Goal_shot {
  game_id?: string
  team?: boolean
  kind?: Goal_shot_outcome
  x?: number
  y?: number
  timestamp?: Date
}