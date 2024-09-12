import type { ReactElement } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  LoginFieldsSchema,
  type LoginFields,
} from "@/features/login/types/LoginFields";

type LoginFormProps = {
  onSubmit: SubmitHandler<LoginFields>;
};

function LoginForm({ onSubmit }: LoginFormProps): ReactElement {
  const form = useForm<LoginFields>({
    resolver: zodResolver(LoginFieldsSchema),
    defaultValues: LoginFieldsSchema.parse({}),
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          name="userName"
          render={({ field }): ReactElement => (
            <FormItem>
              <FormLabel>Benutzername</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="password"
          render={({ field }): ReactElement => (
            <FormItem>
              <FormLabel>Passwort</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Login</Button>
      </form>
    </Form>
  );
}

export default LoginForm;
