import type { LoginFields } from "@/features/login/types/LoginFields";
import { STORAGE_CREDENTIALS } from "@/features/login/utils/constants";

export function useDefaultCredentials(): Partial<LoginFields> {
  const storedCredentials = localStorage.getItem(STORAGE_CREDENTIALS);

  const defaultValues: Partial<LoginFields> =
    import.meta.env.MODE === "development"
      ? {
          userName: import.meta.env.VITE_USER_NAME as string,
          password: import.meta.env.VITE_PASSWORD as string,
        }
      : {};

  if (storedCredentials) {
    const parsedCredentials = JSON.parse(storedCredentials) as {
      userName: string;
      password: string;
    };
    defaultValues.userName = parsedCredentials.userName;
    defaultValues.password = parsedCredentials.password;
  }

  return defaultValues;
}
