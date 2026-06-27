import { login } from "@/services/auth.service";

export function useAuth() {
  return {
    login,
  };
}