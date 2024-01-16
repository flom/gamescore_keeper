import type { ReactElement } from "react";
import { useFieldArray, useForm } from "react-hook-form";
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
import { Player } from "@/models/Player";
import { GameScoreSchema } from "@/models/GameScore";

type AddGameInputProps = {
  group: Group;
};

function AddGameInput({ group }: AddGameInputProps): ReactElement {
  const form = useForm<GameRecord>({
    resolver: zodResolver(GameRecordSchema),
    defaultValues: GameRecordSchema.parse({
      scores: group.players.map((player: Player) =>
        GameScoreSchema.parse({ playerId: player.id }),
      ),
    }),
    mode: "onBlur",
  });

  const { control, register } = form;
  const { fields } = useFieldArray({
    control,
    name: "scores",
  });

  return (
    <Form {...form}>
      <form className="mb-2 flex flex-col gap-4">
        <FormField
          name="gameId"
          render={({ field }): ReactElement => (
            <FormItem>
              <FormLabel>Spiel</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
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
        {fields.map((field, index) => (
          <FormField
            key={field.id}
            name={`scores.${index}.score`}
            render={(f): ReactElement => {
              console.log(">>", f);
              // todo: Input changes number to string
              return (
                <FormItem>
                  <FormLabel>Score</FormLabel>
                  <FormControl>
                    <Input type="number" {...f.field} />
                  </FormControl>
                </FormItem>
              );
            }}
          />
        ))}
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
            Gruppe erstellen
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default AddGameInput;
