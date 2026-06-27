import LoginBanner from "@/components/auth/LoginBanner";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-slate-100">

      <LoginBanner />

      <div className="flex flex-1 items-center justify-center px-8">
        <LoginForm />
      </div>

    </div>
  );
}