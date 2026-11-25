import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "fix: touched one line in the payment service, it is now a personality. deploying friday 4:59pm, god is my rollback plan";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputPath = join(outputDir, "entry.txt");

try {
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(outputPath, `${line}\n`, "utf8");
} catch (cause) {
  throw new Error(`Failed to write entry from ${import.meta.url} to ${outputPath}`, { cause });
}

const characterCount = readFileSync(outputPath, "utf8").trim().length;
if (characterCount === 0 || characterCount > 159) {
  throw new Error(`Competition gate failed: entry.txt has ${characterCount} trimmed characters; expected 1–159.`);
}
