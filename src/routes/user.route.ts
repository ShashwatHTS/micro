const express = require("express");
const { User } = require("../entities/User");

const router = express.Router();
router.get("/", async (req, res) => {
  res.send("users");
});

router.post("/create", async (req, res) => {
  const { first_name, last_name } = req.body;
 
//   res.send(user);
});

export { router as createUserRoute };
