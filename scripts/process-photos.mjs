// Converts the original photos in ../Photos into web-sized WebP files in public/photos.
// Usage: npm run photos
import sharp from "sharp";
import { execFileSync } from "node:child_process";
import { readdirSync, mkdirSync, existsSync, writeFileSync } from "node:fs";
import path from "node:path";

const SRC = path.resolve("../Photos");
const OUT = path.resolve("public/photos");
const CACHE = path.resolve(".cache");
const WIDTHS = [800, 1600, 2400];
mkdirSync(OUT, { recursive: true });
mkdirSync(CACHE, { recursive: true });

const slug = (name) =>
  name.replace(/\.[^.]+$/, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const manifest = {};
for (const dir of ["Horizontal", "Vertical"]) {
  for (const file of readdirSync(path.join(SRC, dir))) {
    if (file.startsWith(".")) continue;
    let input = path.join(SRC, dir, file);
    // Camera RAW (.cr3) isn't readable by sharp; let macOS sips decode it first.
    if (/\.cr3$/i.test(file)) {
      const tmp = path.join(CACHE, slug(file) + ".jpg");
      if (!existsSync(tmp)) execFileSync("sips", ["-s", "format", "jpeg", input, "--out", tmp]);
      input = tmp;
    }
    const id = slug(file);
    const img = sharp(input, { limitInputPixels: false }).rotate();
    const meta = await img.metadata();
    for (const w of WIDTHS) {
      const out = path.join(OUT, `${id}-${w}.webp`);
      if (existsSync(out)) continue;
      await sharp(input, { limitInputPixels: false })
        .rotate()
        .resize({ width: w, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(out);
    }
    const { width, height } = await sharp(path.join(OUT, `${id}-800.webp`)).metadata();
    manifest[id] = { width, height, source: `${dir}/${file}` };
    console.log("✓", id, meta.width + "x" + meta.height);
  }
}
writeFileSync(path.join(OUT, "manifest.json"), JSON.stringify(manifest, null, 2));
