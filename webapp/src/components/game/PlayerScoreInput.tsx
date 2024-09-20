import { type ReactElement, useState } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { Group } from "@/types/Group";
import { useFieldArray, type UseFormReturn } from "react-hook-form";
import type { GameRecord } from "@/types/GameRecord";

type PlayerScoreInputProps = {
  group: Group;
  form: UseFormReturn<GameRecord>;
};

function PlayerScoreInput({
  group,
  form,
}: PlayerScoreInputProps): ReactElement {
  const { control, register } = form;
  const { fields } = useFieldArray({
    control,
    name: "scores",
  });

  const [currentScore, setCurrentScore] = useState<number>(
    group.players.length,
  );

  return (
    <div className="flex flex-row gap-2">
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
              <FormControl>
                <Button
                  variant="secondary"
                  type="button"
                  onClick={(): void => {
                    form.setValue(`scores.${index}.score`, currentScore);
                    setCurrentScore(Math.max(currentScore - 1, 0));
                  }}
                >
                  {currentScore}
                </Button>
              </FormControl>
            </FormItem>
          )}
        />
      ))}
      <FormItem>
        <FormLabel>&nbsp;</FormLabel>
        <FormControl>
          <Button
            className="w-full"
            variant="outline"
            type="button"
            onClick={(): void => {
              setCurrentScore(group.players.length);
              for (let i = 0; i < group.players.length; i += 1) {
                form.setValue(`scores.${i}.score`, 0);
              }
            }}
          >
            <i className="fa-solid fa-rotate" />
          </Button>
        </FormControl>
      </FormItem>
    </div>
  );
}

export default PlayerScoreInput;
