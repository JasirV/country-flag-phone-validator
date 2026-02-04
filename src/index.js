import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import countries from "./data/countries.json" assert { type: "json" };

import { validatePhoneNumber } from "./validators/phoneValidator.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function getAllCountries() {
  return countries;
}

export function getFlagSvg(iso2) {
  try {
    const filePath = path.join(
      __dirname,
      "flags",
      `${iso2.toUpperCase()}.svg`
    );
    return fs.readFileSync(filePath, "utf8");
  } catch {
    return null;
  }
}

export { validatePhoneNumber };
