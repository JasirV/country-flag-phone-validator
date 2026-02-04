import fs from 'fs';
import path from 'path';
import countries from './data/countries.json' assert { type: "json" };
import { validatePhoneNumber } from './validators/phoneValidator.js';

export function getCountries() {
  return countries;
}

export function getFlagSvg(iso2) {
  try {
    const filePath = path.join(
      __dirname,
      'flags',
      `${iso2.toUpperCase()}.svg`
    );
    return fs.readFileSync(filePath, 'utf8');
  } catch {
    return null;
  }
}

export { validatePhoneNumber };
