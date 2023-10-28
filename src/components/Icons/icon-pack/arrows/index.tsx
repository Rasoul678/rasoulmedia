import DownArrow from "./Down";
import LeftArrow from "./Left";
import RightArrow from "./Right";
import UpArrow from "./Up";

export const arrows = {
  right: <LeftArrow />,
  left: <RightArrow />,
  up: <UpArrow />,
  down: <DownArrow />,
} as const;

export type Direction = keyof typeof arrows;
