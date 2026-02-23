🌍 country-flags-phone-validator-pro

A lightweight and powerful phone number validation library with country metadata and SVG flag support.

Validate international numbers using:

✅ ISO country code (IN)

✅ Dial code (+91)

✅ Full international number (+919845743298)

✅ Get all countries with flags

✅ Get SVG flag by ISO code

📦 Installation
npm install country-flags-phone-validator-pro

or

yarn add country-flags-phone-validator-pro
🚀 Usage
import {
  validatePhoneNumber,
  getAllCountries,
  getFlagSvg
} from "country-flags-phone-validator-pro";
📱 Phone Validation

The validatePhoneNumber function supports 3 input formats.

1️⃣ ISO Code + National Number
validatePhoneNumber("IN", "9845743298");
✔ Returns
{
  valid: true,
  country: "India",
  iso2: "IN",
  dialCode: "+91",
  flag: "🇮🇳",
  nationalNumber: "9845743298"
}
2️⃣ Dial Code + National Number
validatePhoneNumber("+91", "9845743298");
3️⃣ Full International Number
validatePhoneNumber("+919845743298");
❌ Invalid Example
{
  valid: false,
  error: "INVALID_PHONE"
}
🌎 Get All Countries
const countries = getAllCountries();
console.log(countries);
Example Country Object
{
  name: "India",
  code: "IN",
  dial_code: "+91",
  flag: "🇮🇳",
  validation: {
    minLength: 10,
    maxLength: 10,
    regex: "^[6-9]\\d{9}$"
  }
}
🏳️ Get SVG Flag
const svg = getFlagSvg("IN");
console.log(svg);
Returns

SVG string if exists

null if flag not found

📘 API Reference
validatePhoneNumber(input, phone?)
Parameter	Type	Required	Description
input	string	Yes	ISO code, Dial code, or full number
phone	string	Optional	Required when using ISO or Dial code
getAllCountries()

Returns complete country list.

getFlagSvg(iso2)
Parameter	Type	Description
iso2	string	2-letter ISO country code

Returns SVG string or null.

⚠️ Error Types

Possible error values:

INVALID_INPUT

INVALID_COUNTRY

INVALID_DIAL_CODE

INVALID_LENGTH

INVALID_PHONE

🧩 Example (Frontend)
const result = validatePhoneNumber("+919845743298");

if (result.valid) {
  console.log("Valid:", result.country);
} else {
  console.log("Error:", result.error);
}
🛠 Requirements

This package uses ES Modules.

Make sure your package.json contains:

{
  "type": "module"
}
📄 License

MIT