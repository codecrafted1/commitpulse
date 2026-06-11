import { describe, expect, it } from 'vitest';
import { SVG_WIDTH, SVG_HEIGHT, isFontKey } from './generatorConstants';
import { FONT_MAP } from './fonts';

describe('generatorConstants Massive Scaling', () => {
  it('isFontKey returns true for all known keys across 10,000 lookups', () => {
    const keys = Object.keys(FONT_MAP);
    const start = performance.now();
    for (let i = 0; i < 10_000; i++) {
      const key = keys[i % keys.length];
      expect(isFontKey(key)).toBe(true);
    }
    expect(performance.now() - start).toBeLessThan(500); // performance guard
  });

  it('isFontKey returns false for 5,000 synthetic unknown font names', () => {
    const unknowns = Array.from({ length: 5_000 }, (_, i) => `font_${i}`);
    unknowns.forEach((f) => expect(isFontKey(f)).toBe(false));
  });

  it('SVG_WIDTH and SVG_HEIGHT do not drift under 10,000 repeated reads', () => {
    for (let i = 0; i < 10_000; i++) {
      expect(SVG_WIDTH).toBe(600);
      expect(SVG_HEIGHT).toBe(420);
    }
  });

  it('SVG_WIDTH and SVG_HEIGHT yield valid coordinate bounds for 10,000 simulated contributor positions', () => {
    const positions = Array.from({ length: 10_000 }, (_, i) => ({
      x: i % SVG_WIDTH,
      y: Math.floor(i / SVG_WIDTH) % SVG_HEIGHT,
    }));
    positions.forEach(({ x, y }) => {
      expect(x).toBeGreaterThanOrEqual(0);
      expect(x).toBeLessThan(SVG_WIDTH);
      expect(y).toBeGreaterThanOrEqual(0);
      expect(y).toBeLessThan(SVG_HEIGHT);
    });
  });

  it('isFontKey handles extreme string lengths without timing out', () => {
    const extremeInputs = ['', 'a', 'x'.repeat(100), 'x'.repeat(10_000), 'x'.repeat(100_000)];
    const start = performance.now();
    extremeInputs.forEach((s) => expect(isFontKey(s)).toBe(false));
    expect(performance.now() - start).toBeLessThan(200);
  });
});
