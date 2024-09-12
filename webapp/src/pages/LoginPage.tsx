import { type ReactElement, useState } from "react";
import Navbar from "@/components/compositions/Navbar";
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
import Container from "@/components/compositions/Container";
import { Button } from "@/components/ui/button";
import usersHook from "@/api/users.hook";
import { useNavigate } from "react-router-dom";
import { Alert, AlertTitle } from "@/components/ui/alert";

const loginSchema = z.object({
  userName: z.string().default(""),
  password: z.string().default(""),
});
type LoginType = z.infer<typeof loginSchema>;

function LoginPage(): ReactElement {
  const navigate = useNavigate();
  const loginUser = usersHook.useLogin();

  const form = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
    defaultValues: loginSchema.parse({}),
  });

  const [showError, setShowError] = useState<boolean>(false);

  const onSubmit = async (values: LoginType): Promise<void> => {
    setShowError(false);
    try {
      await loginUser(values.userName, values.password);
      navigate("/");
    } catch {
      setShowError(true);
    }
  };

  return (
    <div>
      <Navbar title="Game Score" />

      <Container>
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

        {showError ? (
          <Alert className="mt-4" variant="destructive">
            <AlertTitle>Ungültiger Benutzer oder Passwort</AlertTitle>
          </Alert>
        ) : undefined}
      </Container>
    </div>
  );
}

export default LoginPage;
