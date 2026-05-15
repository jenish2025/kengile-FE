import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

declare global {
  // eslint-disable-next-line no-var
  var _pgClient: postgres.Sql | undefined;
}

// Reuse connection in dev to avoid exhausting the connection pool on hot reload
const client =
  global._pgClient ??
  postgres(process.env.DATABASE_URL!, { ssl: "require", max: 10 });

if (process.env.NODE_ENV !== "production") {
  global._pgClient = client;
}

export const db = drizzle(client, { schema });
