import countries from "../data/countries.json" assert { type: "json" };
import { errors } from "../errors/errorMessages.js";

export function validatePhoneNumber(input, phone) {
  let country;
  let nationalNumber;

  // 🟢 CASE 1: ISO country code + phone (IN, 9845743298)
  if (phone && /^[A-Z]{2}$/i.test(input)) {
    country = countries.find(
      c => c.code.toUpperCase() === input.toUpperCase()
    );
    nationalNumber = phone;
  }

  // 🟢 CASE 2: Dial code + phone (+93, 701234567)
  else if (phone && input.startsWith("+")) {
    country = countries.find(c => c.dial_code === input);
    nationalNumber = phone;
  }

  // 🟢 CASE 3: Full international number (+93701234567)
  else if (!phone && input.startsWith("+")) {
    country = countries
      .sort((a, b) => b.dial_code.length - a.dial_code.length)
      .find(c => input.startsWith(c.dial_code));

    if (!country) {
      return { valid: false, error: errors.INVALID_DIAL_CODE };
    }

    nationalNumber = input.slice(country.dial_code.length);
  }

  // ❌ Invalid input
  else {
    return { valid: false, error: errors.INVALID_INPUT };
  }

  if (!country) {
    return { valid: false, error: errors.INVALID_COUNTRY };
  }

  const { minLength, maxLength, regex } = country.validation;

  if (
    nationalNumber.length < minLength ||
    nationalNumber.length > maxLength
  ) {
    return { valid: false, error: errors.INVALID_LENGTH };
  }

  if (!new RegExp(regex).test(nationalNumber)) {
    return { valid: false, error: errors.INVALID_PHONE };
  }

  return {
    valid: true,
    country: country.name,
    iso2: country.code,
    dialCode: country.dial_code,
    flag: country.flag,
    nationalNumber
  };
}
