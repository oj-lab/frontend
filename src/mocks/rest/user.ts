import { http } from "msw";

export const getCurrentUser = http.get("/user/current", (info) => {
  const authToken = info.cookies["auth-token"];
  if (authToken === "233") {
    return new Response(
      JSON.stringify({
        username: "admin",
        roles: ["admin", "user"],
      }),
      {
        status: 200,
      },
    );
  }
  return new Response("Unauthorized", {
    status: 401,
  });
});

export const postLogin = http.post("/login", (info) => {
  return new Response(
    JSON.stringify({
      token: "233",
    }),
    {
      status: 200,
    },
  );
});
