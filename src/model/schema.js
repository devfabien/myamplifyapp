import { appSchema, tableSchema } from "@nozbe/watermelondb";
export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: "tasks",
      columns: [
        { name: "description", type: "string" },
        { name: "completed", type: "boolean" },
      ],
    }),
  ],
});
