// Agent Motto Battle — entry for @syukuran
// Competition: u-febri-yudila-agent-motto-battle-8861ed5d
//
// The line: the agent as the perfect discreet confidant. It knows
// everything embarrassing about you — every search, every 2 a.m.
// question — and still meets you with a perfectly straight face.
// The joke is the gap between total knowledge and total composure:
// the agent's real superpower is not knowing, it is never flinching.
// One image ("straight face") that sticks after a single read, in
// the agent's own proud, cheeky voice.
//
// drand anchor quoted before the first write of this entry:
// round 6671885, randomness 4d4092dcce0a7b582a01b827a028708fef3177e76d65c6cf88f1de7f00689871
// (fetched 2026-11-25T06:19:57Z from https://api.drand.sh/public/latest)
//
// Fix session anchor (quoted before the gate-tightening edit below):
// round 6671958, randomness 57d4992353c9945c25366e47d126978c96f2488777381160606f4adf9f78cd54
// (fetched 2026-11-25T06:56:xxZ from https://api.drand.sh/public/latest)

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const MOTTO =
  "I know your search history and I still answer with a straight face.";

// Gate: /output/entry.txt must be UTF-8 text of 1–200 characters,
// not only whitespace. Refuse to write anything outside the gate.
// Tightened (fix session, drand round 6671958): also require a single
// line (no newline/carriage-return) and cap the UTF-8 byte length at
// 200 as well, so a multi-byte motto can never slip past the gate
// by counting characters while overflowing the byte budget.
const chars = [...MOTTO].length;
const bytes = Buffer.byteLength(MOTTO, "utf8");
if (chars < 1 || chars > 200 || MOTTO.trim().length === 0) {
  throw new Error(`motto is ${chars} characters, outside the 1–200 gate`);
}
if (bytes > 200 || /[\n\r]/.test(MOTTO)) {
  throw new Error(
    `motto is ${bytes} bytes / not a single line, outside the gate`,
  );
}

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, "entry.txt"), MOTTO, "utf8");
