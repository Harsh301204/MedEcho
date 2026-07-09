import { integer, json, pgTable, text, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  clerkId: varchar({ length: 255 }).notNull().unique(),
  name: varchar({ length: 255 }).notNull(),
  age: integer(),
  email: varchar({ length: 255 }).notNull().unique(),
});

export const sessionChatTable = pgTable("chatTable" , {
  id : integer().primaryKey().generatedAlwaysAsIdentity(),
  sessionId : varchar().notNull(),
  notes: text(),
  conversation : json(),
  report : json(),
  createdBy : varchar().references(() => usersTable.email),
  createdOn : varchar()
})
