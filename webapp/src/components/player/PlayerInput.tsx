import type { MutableRefObject, ReactElement } from "react";
import type { Player } from "@/models/Player";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().default(""),
});

type RefPlayerInputProps = {
  playerRef: MutableRefObject<Player>;
};

function PlayerInput({ playerRef }: RefPlayerInputProps): ReactElement {
  const onNameChange = (val: string): void => {
    playerRef.current.name = val;
  };

  const onColorChange = (color: string): void => {
    playerRef.current.color = color;
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  // return (
  //   <div className="flex w-full flex-row items-end gap-2">
  //     <TextField
  //       label="Spieler"
  //       defaultValue={playerRef.current.name}
  //       onChange={onNameChange}
  //     />
  //     <div>
  //       <input
  //         type="color"
  //         className="h-10"
  //         defaultValue={playerRef.current.color}
  //         onChange={(e): void => onColorChange(e.target.value)}
  //       />
  //     </div>
  //   </div>
  // );
  return (
    <Form {...form}>
      <form>
        <FormField
          render={({ field }): ReactElement => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          name="name"
        />
      </form>
    </Form>
  );
}

export default PlayerInput;
