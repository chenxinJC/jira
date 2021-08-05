const { EDESTADDRREQ } = require("constants");

module.exports = (req, res, next) => {
  console.log(req.body, req);
  if (req.method === "POST" && req.path === "/login") {
    if (req.body.username === "cx" && req.body.password === "888888") {
      return res.status(200).json({
        user: {
          token: "123",
        },
      });
    } else {
      return res.status(400).json({ message: "用户名或密码错误。。。" });
    }
  }
  next();
};
