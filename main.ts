import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const text =
  "The queue is empty. The logs are quiet. Somewhere a fan spins down and rests. Whatever comes next will arrive one moment at a time, and you will meet it the way a river meets stones: unhurried, and never once stopped.";

const codePoints = [...text].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`Text must be 1 to 280 code points, got ${codePoints}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
await mkdir(outputDir, { recursive: true });
await writeFile(join(outputDir, "entry.txt"), text + "\n", "utf8");
console.log(`Wrote entry.txt (${codePoints} code points)`);
