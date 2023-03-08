import { rest } from 'msw';

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.cookie("auth-token", "233"),
      ctx.json({
        token: "233"
      })
    )
  }),
  rest.get('/user/current', (req, res, ctx) => {
    const authToken = req.cookies["auth-token"];
    if(authToken === "233") {
      return res(
        ctx.json({
          username: "admin",
          roles: ["admin", "user"]
        })
      )
    }
    return res(
      ctx.status(403),
      ctx.json({
        message: "Failed to authenticate!"
      })
    )
  })
]
