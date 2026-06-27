import { LockKeyhole } from "lucide-react";

export default function LoginBanner() {
  return (
    <div className="hidden lg:flex w-1/2 bg-slate-900 text-white flex-col justify-center px-20">

      <div className="max-w-md">

        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600">
          <LockKeyhole size={30} />
        </div>

        <h1 className="text-5xl font-bold leading-tight text-white!">
          Project
          <br />
          Management AI
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          Smart workspace to manage projects,
          assign tasks, monitor reports,
          and receive AI-powered recommendations.
        </p>

      </div>

    </div>
  );
}