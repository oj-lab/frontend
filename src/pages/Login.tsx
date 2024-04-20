import React from "react";
import UserLayout from "../layouts/userLayout/UserLayout";
import { useLogin } from "../hooks/login";


const background = `${import.meta.env.BASE_URL}images/loginBackground.webp`;
const githubIconPath = `${import.meta.env.BASE_URL}images/github-mark.svg`;
const eyeOn = `${import.meta.env.BASE_URL}images/eye-on.svg`;
const eyeOff = `${import.meta.env.BASE_URL}images/eye-off.svg`;

const client_id = "c0ddc8b484c351d2a3b5";
const authorize_uri = "https://github.com/login/oauth/authorize";
const redirect_uri = "http://localhost:8080/api/v1/user/oauth/redirect";

const Login: React.FC = () => {
    const [type, setType] = React.useState<string>("password");
    const [icon, setIcon] = React.useState<string>(eyeOn);
    const { runLogin, setAccount, setPassword } = useLogin();

    const toggleShowPassword = () => {
        if (type === "password") {
            setIcon(eyeOn);
            setType("text");
        } else {
            setIcon(eyeOff);
            setType("password");
        }
    };

    return (
        <UserLayout>
            <section className="mx-5 my-0 flex flex-col items-center justify-center space-y-10 md:mx-0 md:my-0 md:flex-row md:space-x-16 md:space-y-40">
                <div className="max-w-sm md:w-1/3">
                    <img src={background} alt="BackgroundImage" />
                </div>

                <div className="max-w-sm md:w-1/3">
                    <div className="text-center md:text-left">
                        <label className="ab ml-10 mr-10">Sign in with</label>
                        <button
                            type="button"
                            className="centermx-1 h-9 w-9  rounded-full text-white shadow-[0_4px_9px_-4px_#3b71ca] hover:bg-blue-700"
                            onClick={
                                () =>
                                    (window.location.href = `${authorize_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}`)
                                // backend will get github user info
                                //
                                // If exists, get user info from backend, like login
                                //
                                // or maybe come to a password set stage, login ?
                            }
                        >
                            <img src={githubIconPath} alt="github" />
                        </button>
                    </div>
                    <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                        <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
                            Or
                        </p>
                    </div>
                    <input
                        className="flex w-full rounded border border-solid border-gray-300 px-4 py-2 text-sm"
                        type="text"
                        placeholder="Username"
                        onChange={(e) => setAccount(e.target.value)}
                    />
                    <div className="relative mt-4 rounded border border-solid border-gray-300 py-0">
                        <input
                            className="flex w-full rounded px-4 py-2 text-sm"
                            type={type}
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="current-password"
                        />
                        <button
                            className="absolute end-0 top-0 rounded-e-md p-1.5"
                            onClick={toggleShowPassword}
                        >
                            <img src={icon} alt="toggle" />
                        </button>
                    </div>

                    <div className="mt-4 flex justify-between text-sm font-semibold">
                        <label className="flex cursor-pointer text-slate-500 hover:text-slate-600">
                            <input className="mr-1" type="checkbox" />
                            <span>Remember Me</span>
                        </label>
                        <a
                            className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
                        >
                            Forgot Password?
                        </a>
                    </div>

                    <div className="text-center md:text-left">
                        <button
                            className="mt-4 rounded bg-blue-600 px-4 py-2 text-xs uppercase tracking-wider text-white hover:bg-blue-700"
                            type="submit"
                            onClick={() => {
                                runLogin(() => {
                                    // redirect?
                                    // user status update?
                                });
                            }}
                        >
                            Login
                        </button>
                    </div>
                    <div className="mt-4 text-center text-sm font-semibold text-slate-500 md:text-left">
                        Don&apos;t have an account?{" "}
                        <a
                            className="text-red-600 hover:underline hover:underline-offset-4"
                        >
                            Register
                        </a>
                    </div>
                </div>
            </section>
        </UserLayout>
    );
};

export default Login;
