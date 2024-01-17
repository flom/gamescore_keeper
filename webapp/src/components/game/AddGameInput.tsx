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
import type { Player } from "@/models/Player";
import { GameScoreSchema } from "@/models/GameScore";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import type { Game } from "@/models/Game";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

type AddGameInputProps = {
  group: Group;
  onSubmit: (gameRecord: GameRecord) => Promise<void> | void;
};

// todo game dropdown
// todo score styling
function AddGameInput({ group, onSubmit }: AddGameInputProps): ReactElement {
  const form = useForm<GameRecord>({
    resolver: zodResolver(GameRecordSchema),
    defaultValues: GameRecordSchema.parse({
      scores: group.players.map((player: Player) =>
        GameScoreSchema.parse({ playerId: player.id }),
      ),
    }),
    mode: "onBlur",
  });

  const { control, register, handleSubmit, formState } = form;
  const { fields } = useFieldArray({
    control,
    name: "scores",
  });

  const onSubmitForm = async (data: GameRecord): Promise<void> => {
    if (!formState.isSubmitting) {
      await onSubmit(data);
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
            <FormItem className="flex flex-col">
              <FormLabel>Spiel</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-full justify-between",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      {field.value
                        ? group.games.find(
                            (game: Game) => game.id === field.value,
                          )?.name
                        : "Spiel auswählen"}
                      <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput
                      placeholder="Spiel suchen..."
                      className="h-9"
                    />
                    <CommandEmpty>Kein Spiel gefunden</CommandEmpty>
                    <CommandGroup>
                      {group.games.map((game: Game) => (
                        <CommandItem
                          value={game.name}
                          key={game.id}
                          onSelect={(): void => {
                            form.setValue("gameId", game.id);
                          }}
                        >
                          {game.name}
                          <CheckIcon
                            className={cn(
                              "ml-auto h-4 w-4",
                              game.id === field.value
                                ? "opacity-100"
                                : "opacity-0",
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
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
            render={(): ReactElement => (
              <FormItem>
                <FormLabel>{group.players[index].name}</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...register(`scores.${index}.score`, {
                      valueAsNumber: true,
                    })}
                  />
                </FormControl>
              </FormItem>
            )}
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
