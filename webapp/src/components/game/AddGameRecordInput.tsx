import { type ReactElement, useRef } from "react";
import { useForm } from "react-hook-form";
import { type GameRecord, GameRecordSchema } from "@/models/GameRecord";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { Group } from "@/models/Group";
import { Textarea } from "@/components/ui/textarea";
import type { Player } from "@/models/Player";
import { GameScoreSchema } from "@/models/GameScore";
import GameSelection from "@/components/game/GameSelection";
import PlayerScoreInput from "@/components/game/PlayerScoreInput";

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
  const form = useForm<GameRecord>({
    resolver: zodResolver(GameRecordSchema),
    defaultValues: GameRecordSchema.parse({
      scores: group.players.map((player: Player) =>
        GameScoreSchema.parse({ playerId: player.id }),
      ),
    }),
    mode: "onBlur",
  });

  const { handleSubmit, formState } = form;

  const newGameName = useRef<string>("");

  const onSubmitForm = async (data: GameRecord): Promise<void> => {
    if (!formState.isSubmitting) {
      await onSubmit(data, newGameName.current);
    }
  };

  return (
    <Form {...form}>
      <form
        className="mb-2 mt-4 flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <FormField
          name="gameId"
          render={({ field }): ReactElement => (
            <GameSelection
              form={form}
              field={field}
              group={group}
              onNewGame={(newName: string): void => {
                newGameName.current = newName;
              }}
            />
          )}
        />
        <FormField
          name="dateTime"
          render={({ field }): ReactElement => (
            <FormItem>
              <FormLabel>Datum</FormLabel>
              <FormControl>
                <Input {...field} type="date" />
              </FormControl>
            </FormItem>
          )}
        />
        <PlayerScoreInput group={group} form={form} />
        <FormField
          name="notes"
          render={({ field }): ReactElement => (
            <FormItem>
              <FormLabel>Notizen</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <div>
          <Button type="submit" size="lg" className="w-full">
            Spiel hinzufügen
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default AddGameRecordInput;
