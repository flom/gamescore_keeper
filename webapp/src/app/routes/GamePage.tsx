import type { ReactElement } from "react";
import Navbar from "@/components/compositions/Navbar";
import { useParams } from "react-router-dom";
import type { Game } from "@/types/Game";
import GameOverview from "@/features/game/components/GameOverview";
import useGroup from "@/hooks/useGroup";

function GamePage(): ReactElement {
  const { gameId } = useParams();

  const { data: group } = useGroup();

  if (group === undefined) {
    return <>Group not found</>;
  }
  if (gameId === undefined) {
    return <>Missing gameId</>;
  }

  const game: Game | undefined = group.games.find((g: Game) => g.id === gameId);
  if (game === undefined) {
    return <>Game not found</>;
  }

  return (
    <>
      <Navbar title={game.name} backButtonTo={`/groups/${group.id}`} />
      <GameOverview group={group} gameId={gameId} />
    </>
  );
}

export default GamePage;
