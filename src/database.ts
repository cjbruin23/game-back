import { Kysely, PostgresDialect } from "kysely";
import { Database } from "./types/database";
import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const dialect = new PostgresDialect({
    pool: new Pool({
      connectionString: `${process.env.DB_CONNECTION_STRING}`,
      max: 10,
    })
  })
  
  // Database interface is passed to Kysely's constructor, and from now on, Kysely 
  // knows your database structure.
  // Dialect is passed to Kysely's constructor, and from now on, Kysely knows how 
  // to communicate with your database.
  export const db = new Kysely<Database>({
    dialect,
  })

