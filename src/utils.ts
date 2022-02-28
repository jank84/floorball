export enum Direction {
  Up,
  Down,
  Left,
  Right
};

export enum Goal_shot {
  Scored, Block_goalkeeper, Block_own_player, Block_other_player, Block_player, miss
};

export interface Line {
  start_x: number;
  start_y: number;
  end_x: number;
  end_y: number;
}