import type { ReactElement } from "react";
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

type AddGameInputProps = {
  group: Group;
};

function AddGameInput({ group }: AddGameInputProps): ReactElement {
  const form = useForm<GameRecord>({
    resolver: zodResolver(GameRecordSchema),
    defaultValues: {},
    mode: "onBlur",
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
