import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "One star. The sun rises on time every day and still reserves its worst glare for the exact moment I am driving.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
