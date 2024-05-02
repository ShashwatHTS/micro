import { Router } from "express";
import { createOrder, getOrder } from "../controllers/order.controller";

const router = Router();

router.get("/", (req, res) => {
  res.send("hello world");
});


router.post("/order", createOrder);
router.get("/order/:id", getOrder)

export {
  router as orderRouter,
};
