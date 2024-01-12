import type { ReactElement } from "react";
import { ListItem } from "@/components/compositions/list";
import ListTable from "@/components/compositions/list/ListTable";
import ListTableColumn from "@/components/compositions/list/ListTableColumn";
import type { Group } from "@/models/Group";
import type { Player } from "@/models/Player";

export type PlayerHeaderProps = {
  group: Group;
};

function PlayerHeader({ group }: PlayerHeaderProps): ReactElement {
  return (
    <ListItem
      right={
        <ListTable>
          {group.players.map((player: Player) => (
            <ListTableColumn key={player.id}>
              <span className="font-bold">{player.initials}</span>
            </ListTableColumn>
          ))}
        </ListTable>
      }
    >
      Spieler
    </ListItem>
  );
}

export default PlayerHeader;
