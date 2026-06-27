import api from "./api";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;

  data: {
    token: string;

    user: {
      id: number;
      name: string;
      email: string;
      role: string;
    };
  };
}

export async function login(
  payload: LoginRequest
): Promise<LoginResponse> {
  const response = await api.post<LoginResponse>(
    "/auth/login",
    payload
  );

  return response.data;
}