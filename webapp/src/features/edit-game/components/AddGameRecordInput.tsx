import { Button } from "@/components/ui/button";
import { useCreateGame } from "@/features/edit-game/api/createGame";
import { useCreateGameRecord } from "@/features/edit-game/api/createGameRecord";
import GameRecordForm from "@/features/edit-game/components/GameRecordForm";
import { type GameRecord, GameRecordSchema } from "@/types/GameRecord";
import { GameScoreSchema } from "@/types/GameScore";
import type { Group } from "@/types/Group";
import type { Player } from "@/types/Player";
import type { ReactElement } from "react";
import { NIL } from "uuid";

type AddGameRecordInputProps = {
  group: Group;
  onFinished: () => unknown;
};

function AddGameRecordInput({
  group,
  onFinished,
}: AddGameRecordInputProps): ReactElement {
  const { mutateAsync: createGameRecord } = useCreateGameRecord();
  const { mutateAsync: createGame } = useCreateGame();

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
