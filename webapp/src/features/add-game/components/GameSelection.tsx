import { type ReactElement, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Game } from "@/types/Game";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import type { Group } from "@/types/Group";
import type {
  ControllerRenderProps,
  FieldValues,
  UseFormReturn,
} from "react-hook-form";
import type { GameRecord } from "@/types/GameRecord";
import { NIL } from "uuid";

type GameSelectionProps = {
  form: UseFormReturn<GameRecord>;
  field: ControllerRenderProps<FieldValues, "gameId">;
  group: Group;
  onNewGame: (gameName: string) => void;
  isDisabled: boolean;
};

function GameSelection({
  form,
  field,
  group,
  onNewGame,
  isDisabled,
}: GameSelectionProps): ReactElement {
  const [popoverVisible, setPopoverVisible] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [newGame, setNewGame] = useState<string>("");

  return (
    <FormItem className="flex flex-col">
      <FormLabel>Spiel</FormLabel>
      <Popover open={popoverVisible} onOpenChange={setPopoverVisible}>
        <PopoverTrigger asChild>
          <FormControl>
            <Button
              variant="outline"
              role="combobox"
              className={cn(
                "w-full justify-between",
                !field.value && "text-muted-foreground",
              )}
              disabled={isDisabled}
            >
              {field.value
                ? (group.games.find((game: Game) => game.id === field.value)
                    ?.name ?? newGame)
                : "Spiel auswählen"}
              <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent className="w-60 p-0">
          <Command>
            <CommandInput
              placeholder="Spiel suchen oder erstellen"
              className="h-9"
              onValueChange={setSearchValue}
            />
            <CommandList>
              <CommandGroup>
                {group.games.map((game: Game) => (
                  <CommandItem
                    value={game.name}
                    key={game.id}
                    onSelect={(): void => {
                      form.setValue("gameId", game.id);
                      setPopoverVisible(false);
                      setSearchValue("");
                    }}
                  >
                    {game.name}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        game.id === field.value ? "opacity-100" : "opacity-0",
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup forceMount>
                <CommandItem
                  value={searchValue}
                  onSelect={(): void => {
                    form.setValue("gameId", NIL);
                    setNewGame(searchValue);
                    onNewGame(searchValue);
                    setPopoverVisible(false);
                    setSearchValue("");
                  }}
                >
                  Neues Spiel: {searchValue}
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </FormItem>
  );
}

export default GameSelection;
