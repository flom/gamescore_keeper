import type { PropsWithChildren, ReactElement } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlayerSchema } from "@/types/Player";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { type Group, GroupSchema } from "@/types/Group";

const formDefaultValues: Partial<Group> = {
  name: "",
  players: [PlayerSchema.parse({})],
};

type Props = {
  defaultValue?: Partial<Group>;
  onSubmit: (group: Group) => Promise<void> | void;
  hasPlayersInput?: boolean; // disable in case of edit
};

function GroupForm({
  onSubmit,
  defaultValue = formDefaultValues,
  hasPlayersInput = true,
  children = undefined,
}: PropsWithChildren<Props>): ReactElement {
  const form = useForm<Group>({
    resolver: zodResolver(GroupSchema),
    defaultValues: defaultValue,
    mode: "onBlur",
  });
  const { control, register, handleSubmit, formState } = form;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "players",
  });

  const onAddPlayer = (): void => {
    append(PlayerSchema.parse({}));
  };

  const onRemovePlayer = (): void => {
    if (fields.length > 1) {
      remove(fields.length - 1);
    }
  };

  const onSubmitForm = async (data: Group): Promise<void> => {
    if (!formState.isSubmitting) {
      await onSubmit(data);
    }
  };

  return (
    <Form {...form}>
      <form
        className="mb-2 flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <FormField
          name="name"
          render={({ field }): ReactElement => (
            <FormItem>
              <FormLabel>Gruppen Name</FormLabel>
              <FormControl>
                <Input
                  spellCheck={false}
                  autoComplete="off"
                  inputMode="text"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        {hasPlayersInput ? (
          <>
            {fields.map((field, index) => (
              <div
                key={field.id}
                className="grid grid-cols-[3fr_1fr_1fr] gap-2"
              >
                <FormField
                  name={`players.${index}.name`}
                  render={(): ReactElement => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          spellCheck={false}
                          autoComplete="off"
                          inputMode="text"
                          autoCapitalize="words"
                          data-testid={`PlayersInput.${index}.name`}
                          {...register(`players.${index}.name`)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name={`players.${index}.initials`}
                  render={(): ReactElement => (
                    <FormItem>
                      <FormLabel>Initialen</FormLabel>
                      <FormControl>
                        <Input
                          spellCheck={false}
                          autoComplete="off"
                          inputMode="text"
                          autoCapitalize="characters"
                          data-testid={`PlayersInput.${index}.initials`}
                          {...register(`players.${index}.initials`)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name={`players.${index}.color`}
                  render={(): ReactElement => (
                    <FormItem>
                      <FormLabel>Farbe</FormLabel>
                      <FormControl>
                        <Input
                          type="color"
                          {...register(`players.${index}.color`)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            ))}
            <div className="mx-auto">
              <Button
                type="button"
                onClick={onAddPlayer}
                size="iconLarge"
                variant="outline"
                data-testid="PlayersInputAddPlayer"
              >
                <i className="fa-solid fa-plus fa-xl" />
                <span className="sr-only">Spieler hinzufuegen</span>
              </Button>
              <Button
                type="button"
                onClick={onRemovePlayer}
                size="iconLarge"
                variant="outline"
                className="ml-2"
              >
                <i className="fa-solid fa-minus fa-xl" />
                <span className="sr-only">Spieler entfernen</span>
              </Button>
            </div>
          </>
        ) : undefined}
        <div>{children}</div>
      </form>
    </Form>
  );
}

export default GroupForm;
