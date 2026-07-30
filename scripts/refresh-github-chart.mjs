// Refreshes the static GitHub contribution chart asset + count shown on the
// homepage. Run manually with `node scripts/refresh-github-chart.mjs`, or on
// a schedule via .github/workflows/refresh-github-chart.yml.
import { writeFile, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const GITHUB_USERNAME = "duotrods";
const CHART_COLOR = "036BFF";
const SVG_PATH = path.join(__dirname, "../src/assets/github-contributions.svg");
const COMPONENT_PATH = path.join(__dirname, "../src/components/GithubActivity.jsx");

const fetchText = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return res.text();
};

const rawChartSvg = await fetchText(`https://ghchart.rshah.org/${CHART_COLOR}/${GITHUB_USERNAME}`);
// The service doesn't emit a viewBox, so the <svg> has no internal coordinate
// system to scale against — without one, resizing the element just changes
// its empty canvas size while the cells stay pinned at their native pixel
// size. Add a matching viewBox so CSS sizing actually scales the content.
const dimensions = rawChartSvg.match(/<svg[^>]*width="(\d+)"[^>]*height="(\d+)"/);
if (!dimensions) {
  throw new Error("Could not read width/height from fetched chart SVG");
}
const [, width, height] = dimensions;
const chartSvg = rawChartSvg.replace(
  "<svg ",
  `<svg viewBox="0 0 ${width} ${height}" `
);
await writeFile(SVG_PATH, chartSvg);
console.log(`Wrote ${SVG_PATH}`);

const contributionsPage = await fetchText(`https://github.com/users/${GITHUB_USERNAME}/contributions`);
const match = contributionsPage.match(/([\d,]+)\s+contributions?\s+in the last year/i);
if (!match) {
  throw new Error("Could not find contribution count on GitHub contributions page");
}
const count = match[1];

const component = await readFile(COMPONENT_PATH, "utf-8");
const updated = component.replace(
  /const CONTRIBUTIONS_LAST_YEAR = ".*"/,
  `const CONTRIBUTIONS_LAST_YEAR = "${count}"`
);
await writeFile(COMPONENT_PATH, updated);
console.log(`Updated contribution count to ${count} in ${COMPONENT_PATH}`);
