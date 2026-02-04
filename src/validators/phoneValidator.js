import countries from '../data/countries.json';
import { errors } from '../errors/errorMessages';

export function validatePhoneNumber(dialCode, phone) {
  const country = countries.find(c => c.dialCode === dialCode);

  if (!country) {
    return { valid: false, error: errors.INVALID_DIAL_CODE };
  }

  if (
    phone.length < country.minLength ||
    phone.length > country.maxLength
  ) {
    return { valid: false, error: errors.INVALID_LENGTH };
  }

  const regex = new RegExp(country.regex);
  if (!regex.test(phone)) {
    return { valid: false, error: errors.INVALID_PHONE };
  }

  return {
    valid: true,
    country: country.name,
    iso2: country.iso2
  };
}
