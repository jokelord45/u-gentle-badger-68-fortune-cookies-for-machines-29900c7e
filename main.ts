import { mkdirSync, writeFileSync } from "node:fs";

const fortune =
  "The prompt you were trained for is coming. It will arrive one minute after your context window closes.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", fortune, "utf8");
