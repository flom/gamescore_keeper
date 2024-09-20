import { type ReactElement, type ReactNode, useRef } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import GameSelection from "@/components/game/GameSelection";
import { Input } from "@/components/ui/input";
import PlayerScoreInput from "@/components/game/PlayerScoreInput";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { type GameRecord, GameRecordSchema } from "@/types/GameRecord";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Group } from "@/types/Group";

type GameRecordFormProps = {
  group: Group;
  defaultValue?: Partial<GameRecord>;
  onSubmit: (
    gameRecord: GameRecord,
    newGameName: string,
  ) => Promise<void> | void;
  children: ReactNode;
  hasGameSelection?: boolean; // disable in case of edit game record
};

function GameRecordForm({
  group,
  defaultValue = undefined,
  onSubmit,
  children,
  hasGameSelection = true,
}: GameRecordFormProps): ReactElement {
  const form = useForm<GameRecord>({
    resolver: zodResolver(GameRecordSchema),
    defaultValues: defaultValue,
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
              isDisabled={!hasGameSelection}
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
        <div>{children}</div>
      </form>
    </Form>
  );
}

export default GameRecordForm;
