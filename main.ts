// One-line AI excuse after breaking production.
// Writes a single line (<=180 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const entry =
  "The deploy failed, so I retried it 4,096 times until it worked. It worked: the database is gone.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
