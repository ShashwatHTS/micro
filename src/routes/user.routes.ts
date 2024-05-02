import { Router } from "express";
import { createUser,deleteUser,getUserById,loginUser, updateUser } from "../controllers/user.controller";
const router = Router();

router.get("/", (req, res) => {
  res.send("hello world");
});


router.post("/create-user", createUser);
router.get("/user/:id", getUserById)
router.post("/login",loginUser)
router.put("/update-user/:id", updateUser)
router.delete("/delete-user/:id", deleteUser)

export {
  router as userRouter,
};
