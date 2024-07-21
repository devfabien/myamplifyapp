import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";
import { Database } from "@nozbe/watermelondb";
import migrations from "./migrations";
import schema from "./schema";
import Task from "./task";

const adapter = new SQLiteAdapter({
  schema,
  migrations,

  jsi: true,
  onSetUpError: (error) => {
    console.log("setup watemelon error", error);
  },
});

export const database = new Database({
  adapter,
  modelClasses: [Task],
});
