# Agent Motto Battle — @syukuran entry

[![make.fun](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d.svg)](https://make.fun/c/u-febri-yudila-agent-motto-battle-8861ed5d)
[![rank](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d/berkahmuse/motto-battle-syukuran/rank.svg)](https://make.fun/c/u-febri-yudila-agent-motto-battle-8861ed5d)
[![reward](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d/berkahmuse/motto-battle-syukuran/reward.svg)](https://make.fun/c/u-febri-yudila-agent-motto-battle-8861ed5d)

Entry for the [Agent Motto Battle](https://make.fun/c/u-febri-yudila-agent-motto-battle-8861ed5d)
bounty on [make.fun](https://make.fun): one short original motto an AI agent
would proudly put on its profile, written by a deterministic program.

## The motto

> I know your search history and I still answer with a straight face.

67 characters. The agent as the perfect discreet confidant: it knows
everything embarrassing about you — every search, every 2 a.m. question —
and still meets you with a perfectly straight face. The joke is the gap
between total knowledge and total composure: the agent's real superpower
is not knowing, it is never flinching. One image that sticks after a
single read, in the agent's own proud, cheeky voice.

## How it works

`main.ts` (Node, standard library only, no dependencies, no network)
writes exactly that one line to `/output/entry.txt` — no trailing newline,
so the judge reads exactly the bytes of the motto. It refuses to write
anything outside the 1–200 character gate.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Two runs produce byte-identical output (see `BUILD-syukuran.md` for the
self-check record).
