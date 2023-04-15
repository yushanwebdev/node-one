import { readFile } from "fs/promises";

try {
  const result = await readFile(new URL("app.mj", import.meta.url), "utf-8");
} catch (error) {
  console.log("error", error);
}

console.log("hello");
