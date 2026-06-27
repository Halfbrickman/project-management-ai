import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PasswordInput from "./PasswordInput";
import { useAuth } from "@/hooks/useAuth";
import { login } from "@/services/auth.service";
import { useAuthContext } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

import {
    loginSchema,
    type LoginFormData,
} from "@/validations/auth.schema";

export default function LoginForm() {
    const navigate = useNavigate();
    const auth = useAuthContext();
    const { login } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginFormData) => {
        try {
            const response = await login(data);

            auth.login(
                response.data.token,
                response.data.user
            );

            navigate("/dashboard");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl">
            <div className="mb-10">
                <h2 className="text-3xl font-bold text-slate-900">
                    Welcome Back 👋
                </h2>

                <p className="mt-2 text-slate-500">
                    Sign in to continue
                </p>
            </div>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
            >
                {/* EMAIL */}

                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                        Email
                    </label>

                    <Input
                        type="email"
                        placeholder="Enter your email"
                        {...register("email")}
                    />

                    {errors.email && (
                        <p className="mt-2 text-sm text-red-500">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                {/* PASSWORD */}

                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                        Password
                    </label>

                    <PasswordInput
                        placeholder="Enter your password"
                        {...register("password")}
                    />

                    {errors.password && (
                        <p className="mt-2 text-sm text-red-500">
                            {errors.password.message}
                        </p>
                    )}
                </div>

                <Button type="submit">
                    Sign In
                </Button>
            </form>
        </div>
    );
}