import type { ReactElement } from "react";
import Navbar from "@/components/compositions/Navbar";
import Container from "@/components/compositions/Container";
import groupHooks from "@/api/group.hooks";
import { useNavigate, useParams } from "react-router-dom";
import type { GameRecord } from "@/models/GameRecord";
import type { Game } from "@/models/Game";
import EditGameRecordInput from "@/components/game/EditGameRecordInput";
import type { Group } from "@/models/Group";

function EditGameRecordPage(): ReactElement {
  const navigate = useNavigate();
  const { gameRecordId } = useParams();
  const { data: currentGroup } = groupHooks.useGroup();

  const validationResult = validate(currentGroup, gameRecordId);
  if (!validationResult.isValid) {
    return validationResult.invalidView;
  }

  const { group, game, gameRecord } = validationResult;
  const dateLabel = new Date(gameRecord.dateTime).toLocaleDateString();
  const returnUrl = `/groups/${group.id}/game/${gameRecord.gameId}`;

  const onFinished = (): void => {
    navigate(returnUrl);
  };

  return (
    <>
      <Navbar title={`${game.name} ${dateLabel}`} backButtonTo={returnUrl} />
      <Container>
        <EditGameRecordInput
          group={group}
          gameRecord={gameRecord}
          onFinished={onFinished}
        />
      </Container>
    </>
  );
}

export default EditGameRecordPage;

function validate(
  group: Group | undefined,
  gameRecordId: string | undefined,
):
  | {
      isValid: false;
      invalidView: ReactElement;
    }
  | {
      isValid: true;
      group: Group;
      gameRecord: GameRecord;
      game: Game;
    } {
  if (group === undefined) {
    return { isValid: false, invalidView: <>Group not found</> };
  }
  if (gameRecordId === undefined) {
    return { isValid: false, invalidView: <>GameRecordId not found</> };
  }

  const gameRecord: GameRecord | undefined = group.records.find(
    (record: GameRecord) => record.id === gameRecordId,
  );
  if (gameRecord === undefined) {
    return { isValid: false, invalidView: <>GameRecord not found</> };
  }
  const game: Game | undefined = group.games.find(
    (g: Game) => g.id === gameRecord.gameId,
  );
  if (game === undefined) {
    return { isValid: false, invalidView: <>Game not found</> };
  }

  return {
    isValid: true,
    group,
    gameRecord,
    game,
  };
}
