import { HttpResponse, http } from "msw";

export const getCurrentUser = http.get("/api/v1/user/current", (info) => {
  const authToken = info.cookies["auth-token"];
  const username = authToken?.split("-")[3];
  if (authToken && authToken.startsWith("mock-token")) {
    return new Response(
      JSON.stringify({
        name: username,
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

export const postSignOut = http.post("/api/v1/user/logout", async (info) => {
  return new HttpResponse(null, {
    status: 200,
    headers: {
      "Set-Cookie": `auth-token=; Max-Age=0`,
    },
  });
});
