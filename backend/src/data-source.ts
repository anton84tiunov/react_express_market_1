import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./models/User"
import { Product } from "./models/Product"
import { ProductCategory } from "./models/ProductCategory"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "test_user_ts_node_2",
    password: "Qwerty123#",
    database: "test_db_ts_node_2",
    synchronize: true,
    logging: true,
    entities: ["src/models/**/*.ts" ],
    migrations: ["src/migration/**/*.ts"],
    subscribers: ["src/subscriber/**/*.ts"],
    
})


