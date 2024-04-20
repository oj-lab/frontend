import { HttpResponse, http } from "msw";

export const getCurrentUser = http.get("/api/v1/user/current", (info) => {
  const authToken = info.cookies["auth-token"];
  const username = authToken?.split("-")[3];
  if (authToken === "mock-token") {
    return new Response(
      JSON.stringify({
        username: username,
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

export const postLogin = http.post("/api/v1/user/login", async (info) => {
  const body = await info.request.json();
  const { account } = body?.valueOf() as {
    account: string;
    password: string;
  };
  return new HttpResponse(null, {
    status: 200,
    headers: {
      "Set-Cookie": `auth-token=mock-token-for-${account}`,
    },
  });
});
