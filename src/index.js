import fs from "fs";
import path from "path";

import countries from "./data/countries.json" assert { type: "json" };

import { validatePhoneNumber } from "./validators/phoneValidator.js";

export function getAllCountries() {
  return countries;
}

export function getFlagSvg(iso2) {
  if (!iso2) return null;

  try {
    return new URL(`./flags/${iso2.toUpperCase()}.svg`, import.meta.url).href;
  } catch {
    return null;
  }
}

export { validatePhoneNumber };
