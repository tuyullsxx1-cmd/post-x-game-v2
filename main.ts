// main.ts — the whole program: copy POST.json from the repo root
// to the grader's output directory, byte for byte. Nothing else:
// the house reads the post itself from the address POST.json names.
import { copyFileSync, mkdirSync } from "node:fs";
import { join, resolve } from "node:path";

const botDir: string = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

const source: string = resolve(join(botDir, "POST.json"));
const target: string = resolve(join(outDir, "POST.json"));

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
