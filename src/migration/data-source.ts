import { DataSource } from "typeorm";
import { User } from "../entity/User";
import { Order } from "../entity/Order";
export const db1 = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "102199",
  database: "micro",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});

export const db2 = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "102199",
  database: "typeorm",
  synchronize: true,
  logging: false,
  entities: [Order],
  migrations: [],
  subscribers: [],
});
