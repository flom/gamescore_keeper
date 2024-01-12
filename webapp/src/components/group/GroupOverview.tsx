import type { ReactElement } from "react";
import groupHooks from "@/api/group.hooks";
import { List } from "@/components/compositions/list";
import ListSeparator from "@/components/compositions/list/ListSeparator";
import PlayerHeader from "@/components/group/PlayerHeader";
import GrandTotal from "@/components/group/GrandTotal";
import SingleGameScore from "@/components/group/SingleGameScore";
import type { Game } from "@/models/Game";

function GroupOverview(): ReactElement {
  const { data: group } = groupHooks.useGroup();

  if (group === undefined) {
    return <>Group not found</>;
  }

  return (
    <List>
      <PlayerHeader group={group} />
      <GrandTotal />

      <ListSeparator />

      {group.games.map((game: Game) => (
        <SingleGameScore key={game.id} game={game} />
      ))}
    </List>
  );
}

export default GroupOverview;
