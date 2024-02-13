import type { ReactElement } from "react";
import { type GameRecord, GameRecordSchema } from "@/models/GameRecord";
import { Button } from "@/components/ui/button";
import type { Group } from "@/models/Group";
import type { Player } from "@/models/Player";
import { GameScoreSchema } from "@/models/GameScore";
import GameRecordForm from "@/components/game/GameRecordForm";

type AddGameRecordInputProps = {
  group: Group;
  onSubmit: (
    gameRecord: GameRecord,
    newGameName: string,
  ) => Promise<void> | void;
};

function AddGameRecordInput({
  group,
  onSubmit,
}: AddGameRecordInputProps): ReactElement {
  const defaultValue = GameRecordSchema.partial({ gameId: true }).parse({
    scores: group.players.map((player: Player) =>
      GameScoreSchema.parse({ playerId: player.id }),
    ),
  });

  return (
    <GameRecordForm
      group={group}
      onSubmit={onSubmit}
      defaultValue={defaultValue}
    >
      <Button type="submit" size="lg" className="w-full">
        Spiel hinzufügen
      </Button>
    </GameRecordForm>
  );
}

export default AddGameRecordInput;
