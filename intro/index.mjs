import { readFile } from "fs/promises";

process.on("uncaughtException", (e) => {
  console.log("error", e);
});

const result = await readFile(new URL("app.mjs", import.meta.url), "utf-8");

console.log("hello");
