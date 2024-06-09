import React from "react";
import { redirectToOAuthGitHub, postLogin } from "@/api/auth";
import GitHubIcon from "@/components/icons/GitHubIcon";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const background = `${import.meta.env.BASE_URL}images/loginBackground.webp`;

const Login: React.FC = () => {
  const [showPassaword, setShowPassword] = React.useState<boolean>(false);
  const [account, setAccount] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const toggleShowPassword = () => {
    setShowPassword(!showPassaword);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="max-w-sm">
        <img src={background} alt="BackgroundImage" />
      </div>

      <div className="flex w-1/3 max-w-sm flex-col gap-4">
        <div className="flex items-center justify-center gap-4">
          <label className="font-semibold">Sign in with</label>
          <button
            type="button"
            className="centermx-1 h-9 w-9 rounded-full hover:shadow-[0_0px_24px_-4px_#999999]"
            onClick={redirectToOAuthGitHub}
          >
            <GitHubIcon className="fill-base-content" />
          </button>
        </div>

        <div className="flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 text-center font-semibold text-slate-500">Or</p>
        </div>

        <div className="flex flex-col gap-2">
          <label className="input input-bordered flex items-center gap-2">
            <input
              className="grow"
              type="text"
              placeholder="Username"
              onChange={(e) => setAccount(e.target.value)}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              className="grow"
              type={showPassaword ? "text" : "password"}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <button
              className="btn btn-circle btn-ghost btn-sm"
              onClick={toggleShowPassword}
            >
              {showPassaword ? (
                <EyeIcon className="h-6 w-6" />
              ) : (
                <EyeSlashIcon className="h-6 w-6" />
              )}
            </button>
          </label>
        </div>

        <div className="flex justify-between text-sm font-semibold">
          <label className="flex cursor-pointer items-center gap-1 text-slate-500 hover:text-slate-600">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-xs"
            />
            <span className="select-none">Remember Me</span>
          </label>
          <button className="btn btn-link h-6 min-h-6 p-0 ">
            Forgot Password?
          </button>
        </div>

        <button
          className="btn btn-neutral btn-active btn-block"
          type="submit"
          onClick={() => {
            postLogin(account, password).then((res) => {
              console.log(res);
              window.location.href = "/";
            });
          }}
        >
          Login
        </button>

        <div className="text-left text-sm font-semibold text-slate-500">
          Don&apos;t have an account?{" "}
          <button className="btn btn-link h-6 min-h-6 p-0 text-error">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
