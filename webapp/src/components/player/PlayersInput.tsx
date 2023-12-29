import type { ReactElement } from "react";
import { z } from "zod";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlayerSchema } from "@/models/Player";
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

const FormSchema = z.object({
  players: PlayerSchema.array(),
});
type FormType = z.infer<typeof FormSchema>;

function PlayersInput(): ReactElement {
  const form = useForm<FormType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      players: [PlayerSchema.parse({ name: "" })],
    },
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

  const onSubmit = async (data: FormType): Promise<void> => {
    if (!formState.isSubmitting) {
      // todo: call onSubmit props handler
      console.log(">>", data);
    }
  };

  return (
    <Form {...form}>
      <form
        className="mb-2 flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/*<FormField*/}
        {/*  name="players"*/}
        {/*  render={({ field }): ReactElement => {*/}
        {/*    return (*/}
        {/*      <FormItem>*/}
        {/*        <FormLabel>Name</FormLabel>*/}
        {/*      </FormItem>*/}
        {/*    );*/}
        {/*  }}*/}
        {/*/>*/}

        {fields.map((field, index) => (
          <div key={field.id} className="grid grid-cols-[3fr_1fr_1fr] gap-2">
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  spellCheck={false}
                  autoComplete="off"
                  inputMode="text"
                  {...register(`players.${index}.name`)}
                />
              </FormControl>
            </FormItem>
            <FormItem>
              <FormLabel>Initialen</FormLabel>
              <FormControl>
                <Input
                  spellCheck={false}
                  type="text"
                  autoComplete="off"
                  {...register(`players.${index}.initials`)}
                />
              </FormControl>
            </FormItem>
            <FormItem>
              <FormLabel>Farbe</FormLabel>
              <FormControl>
                <Input type="color" {...register(`players.${index}.color`)} />
              </FormControl>
            </FormItem>
          </div>
        ))}
        <FormMessage />
        <div className="mx-auto">
          <Button
            type="button"
            onClick={onAddPlayer}
            size="iconLarge"
            variant="outline"
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
        <div>
          <Button type="submit" size="lg" className="w-full">
            Gruppe erstellen
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default PlayersInput;
