import type { ReactElement } from "react";
import { type GameRecord, GameRecordSchema } from "@/models/GameRecord";
import { Button } from "@/components/ui/button";
import type { Group } from "@/models/Group";
import type { Player } from "@/models/Player";
import { GameScoreSchema } from "@/models/GameScore";
import GameRecordForm from "@/components/game/GameRecordForm";
import { NIL } from "uuid";
import groupHooks from "@/api/group.hooks";

type AddGameRecordInputProps = {
  group: Group;
  onFinished: () => unknown;
};

function AddGameRecordInput({
  group,
  onFinished,
}: AddGameRecordInputProps): ReactElement {
  const { mutateAsync: createGameRecord } = groupHooks.useCreateGameRecord();
  const { mutateAsync: createGame } = groupHooks.useCreateGame();

  const defaultValue = GameRecordSchema.partial({ gameId: true }).parse({
    scores: group.players.map((player: Player) =>
      GameScoreSchema.parse({ playerId: player.id }),
    ),
  });

  const onSubmit = async (
    gameRecord: GameRecord,
    newGameName: string,
  ): Promise<void> => {
    let { gameId } = gameRecord;

    if (gameId === NIL) {
      gameId = await createGame({
        groupId: group.id,
        gameName: newGameName,
      });
    }

    await createGameRecord({
      groupId: group.id,
      gameRecord: {
        ...gameRecord,
        gameId,
      },
    });

    onFinished();
  };

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
