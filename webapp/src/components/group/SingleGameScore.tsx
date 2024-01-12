import type { ReactElement } from "react";
import ListItem from "../compositions/list/ListItem";
import { Link } from "react-router-dom";
import type { Game } from "@/models/Game";

export type SingleGameScoreProps = {
  game: Game; // todo: GameScore required, not Game
};

function SingleGameScore({ game }: SingleGameScoreProps): ReactElement {
  return (
    <ListItem component={Link} to="Quixx">
      {game.name}
    </ListItem>
  );
}

export default SingleGameScore;
