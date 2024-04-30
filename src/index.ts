import { createUserRoute } from "./routes/user.route";

const { createConnection } = require("typeorm");
const express = require('express')
const app = express()

const main = async () => {
  try {
    await createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "102199",
      database: "micro",
      synchronize: true,
        entities: ["src/entities/*.ts"],
    });
    console.log("connect to DB successfully");

    app.use(express.json())
    app.use(createUserRoute)

    app.listen(3000, ()=>{
        console.log("listening on port 3000")
    });
  } catch (error) {
    console.log("connect to DB failed", error);
    throw new Error(error);
  }
};

main();

