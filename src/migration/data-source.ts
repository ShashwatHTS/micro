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
  logging: true,
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
  logging: true,
  entities: [Order],
  migrations: [],
  subscribers: [],
});

export const datasource = new DataSource({
  type: "postgres",
  logging: false,
  replication: {
    master: {
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "102199",
      database: "issue-tracker_flutter",
    },
    slaves: [
      {
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "102199",
        database: "micro",
      },
      {
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "102199",
        database: "typeorm",
      },
    ],
  },
});
