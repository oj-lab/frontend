import React from "react";

import UserLayout from "../layouts/userLayout/UserLayout";
import { useLogin } from "../hooks/login";

// import { useParams } from "react-router-dom";
// import { AiOutlineTwitter } from "react-icons/ai";
// import { BiLogoFacebook } from "react-icons/bi";

const background = `${import.meta.env.BASE_URL}images/loginBackground.webp`;
const githubIconPath = `${import.meta.env.BASE_URL}images/github-mark.svg`;
const eyeOn = `${import.meta.env.BASE_URL}images/eye-on.svg`;
const eyeOff = `${import.meta.env.BASE_URL}images/eye-off.svg`;


const Login: React.FC = () => {
    const [type, setType] = React.useState<string>("password");
    const [icon, setIcon] = React.useState<string>(eyeOn)
    const { runLogin, setAccount, setPassword } = useLogin();

    const toggleShowPassword = () => {
        if (type === "password") {
            setIcon(eyeOn);
            setType('text')
        }
        else {
            setIcon(eyeOff)
            setType('password')
        }
    }

    return (
        <UserLayout>
            <section className="flex flex-col md:flex-row justify-center space-y-10 md:space-y-40 md:space-x-16 items-center my-0 mx-5 md:mx-0 md:my-0">
                <div className="md:w-1/3 max-w-sm">
                    <img src={background} alt="BackgroundImage" />
                </div>

                <div className="md:w-1/3 max-w-sm">
                    <div className="text-center md:text-left">
                        <label className="ab ml-10 mr-10">Sign in with</label>
                        <button
                            type="button"
                            className="centermx-1 h-9 w-9  rounded-full hover:bg-blue-700 text-white shadow-[0_4px_9px_-4px_#3b71ca]"
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
                        className="flex text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
                        type="text"
                        placeholder="Username"
                        onChange={(e) => setAccount(e.target.value)}
                    />
                    <div className="relative mt-4 py-0 border border-solid border-gray-300 flex rounded">
                        <input
                            className="py-2 px-4 block w-full rounded"
                            type={type}
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="current-password"
                        />
                        <button className="absolute top-0 end-0 p-1.5 rounded-e-md" onClick={toggleShowPassword}>
                            <img src={icon} alt="toggle" />
                        </button>
                    </div>


                    <div className="mt-4 flex justify-between font-semibold text-sm">
                        <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                            <input className="mr-1" type="checkbox" />
                            <span>Remember Me</span>
                        </label>
                        <a
                            className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
                            href="#"
                        >
                            Forgot Password?
                        </a>
                    </div>

                    <div className="text-center md:text-left">
                        <button
                            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                            type="submit"
                            onClick={() => {
                                runLogin(() => {
                                    // do redirect
                                    // user status update                                    
                                });
                            }}

                        >
                            Login
                        </button>
                    </div>
                    <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
                        Don&apos;t have an account?{" "}
                        <a
                            className="text-red-600 hover:underline hover:underline-offset-4"
                            href="#"
                        >
                            Register
                        </a>
                    </div>
                </div>
            </section>
        </UserLayout >
    );
};

export default Login;
