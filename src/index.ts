import { Express } from "express";
import "reflect-metadata";
import { db1, db2 } from "./migration/data-source";
import express = require("express");
import { userRouter } from "./routes/user.routes";
import {orderRouter} from "./routes/order.routes"

const app: Express = express();

db1
  .initialize()
  .then(() => {
    console.log("DB1 Source has been initialized!");

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    // app.use(cookieParser());

    app.use("/", userRouter);

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

db2
  .initialize()
  .then(() => {
    console.log("DB2 Source has been initialized!");

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    // app.use(cookieParser());

    app.use("/", orderRouter);

    app.listen(3001, () => {
      console.log("Server is running on port 3001");
    });
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });
