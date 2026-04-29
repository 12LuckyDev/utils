import { readdir, rename } from "fs/promises";

const DIR = "./e2e"; // directory to scan

// matches: 12luckydev-utils-x.y.z.tgz where x, y, z are numbers
const REGEX = /^12luckydev-utils-\d+\.\d+\.\d+\.tgz$/;

async function main() {
  try {
    const files = await readdir(DIR);

    const target = files.find(file => REGEX.test(file));

    if (!target) {
      console.log("No matching file found.");
      return;
    }

    const newName = "12luckydev-utils-e2e.tgz";

    await rename(`${DIR}/${target}`, `${DIR}/${newName}`);

    console.log(`Renamed: ${target} -> ${newName}`);
  } catch (err) {
    console.error("Error:", err);
  }
}

main();