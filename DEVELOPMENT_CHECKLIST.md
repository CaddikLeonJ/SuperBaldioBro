# Super Baldio Bros — Development Checklist

> Testing phase. The existing squirrel arena is our development/test area; do not make a duplicate.

## In active testing
- [x] Normal-form and powered-form sprite mouth calibrations; per-frame option to keep only a sprite's existing open mouth
- [x] Clout Power first-breath sound/effect timing
- [x] Common feet anchor for standing and animating on squirrel bodies (needs on-device playtest)
- [x] **Scream attack prototype** (v0.4.242): hold to use, sonic shockwaves, provisional synthesized sound, squirrel damage/knockback, Hemmergy drain
- [x] **Mobile Scream controls** (v0.4.243): move and sprint freely, reverse normal/powered walking frames when backing up without turning around, aim using the button drag like Fart, scream during jumping/crouching/crawling/other attacks, enlarged mouth while screaming
- [ ] Playtest Scream against squirrels, including joystick movement opposite to the aim, diagonal/up/down drag aim, crouching, jumping, powered mode and squirrel-body platforms
- [ ] Record/upload and integrate Fat Nap's **actual Scream sound** to replace temporary test synthesis
- [ ] **Dedicated standing-still Scream animation**, retaining walking, jumping, crouching and other existing action sprites when moving or performing those actions
- [ ] Fine-tune Scream strength, distance, knockback, recovery and sound/FX after testing

## Later additions — not yet implemented
- [ ] **Destructible environmental objects** — boxes, crates and other props that can be broken by headbutts, kicks and attacks; test destruction effects, collision and drops
- [ ] **Carpenter ants** — new enemy type, after current squirrel combat tests are solid
- [ ] Additional enemy types: cockroaches ("dirt shrimps") and shrimps
- [ ] Full levels, bosses, narrative and Discord finale

## Development rules
- Preserve existing mouth positions, no-mouth settings, player animations, sound mixing and current controls when adding new features.
- Keep the game loadable in iPhone Scriptable using `SuperBaldioBroScriptable.js`, which fetches current `SuperBaldioBro.html` on launch.
- Deliver new mechanics first in the **existing test arena**; adjust based on player feedback before adding them to full levels.
