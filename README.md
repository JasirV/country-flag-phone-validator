# 🌍 country-flags-phone-validator-pro

A lightweight and powerful phone number validation library with built-in country metadata and SVG flag support.

Validate international phone numbers using:

* ✅ ISO country code (`IN`)
* ✅ Dial code (`+91`)
* ✅ Full international number (`+919845743298`)
* ✅ Retrieve all supported countries with metadata
* ✅ Get SVG flag by ISO code

---

## 📑 Table of Contents

* [Introduction](#-introduction)
* [Installation](#-installation)
* [Usage](#-usage)
* [Phone Validation](#-phone-validation)
* [Get All Countries](#-get-all-countries)
* [Get SVG Flag](#-get-svg-flag)
* [API Reference](#-api-reference)
* [Error Types](#-error-types)
* [Frontend Example](#-frontend-example)
* [Requirements](#-requirements)
* [Features](#-features)
* [Dependencies](#-dependencies)
* [Configuration](#-configuration)
* [Troubleshooting](#-troubleshooting)
* [Contributors](#-contributors)
* [License](#-license)

---

## 📖 Introduction

`country-flags-phone-validator-pro` is a modern ES Module-based library for validating international phone numbers using country metadata.

It supports:

* ISO country codes
* International dial codes
* Full international phone numbers
* Country metadata retrieval
* SVG flag retrieval

The library is lightweight, easy to integrate, and frontend-friendly.

---

## 📦 Installation

Using **npm**:

```bash
npm install country-flags-phone-validator-pro
```

Using **yarn**:

```bash
yarn add country-flags-phone-validator-pro
```

---

## 🚀 Usage

```js
import {
  validatePhoneNumber,
  getAllCountries,
  getFlagSvg
} from "country-flags-phone-validator-pro";
```

---

# 📱 Phone Validation

The `validatePhoneNumber` function supports **3 input formats**.

---

## 1️⃣ ISO Code + National Number

```js
validatePhoneNumber("IN", "9845743298");
```

### ✔ Example Response

```json
{
  "valid": true,
  "country": "India",
  "iso2": "IN",
  "dialCode": "+91",
  "flag": "🇮🇳",
  "nationalNumber": "9845743298"
}
```

---

## 2️⃣ Dial Code + National Number

```js
validatePhoneNumber("+91", "9845743298");
```

---

## 3️⃣ Full International Number

```js
validatePhoneNumber("+919845743298");
```

---

## ❌ Invalid Example

```json
{
  "valid": false,
  "error": "INVALID_PHONE"
}
```

---

# 🌎 Get All Countries

```js
const countries = getAllCountries();
console.log(countries);
```

### Example Country Object

```json
{
  "name": "India",
  "code": "IN",
  "dial_code": "+91",
  "flag": "🇮🇳",
  "validation": {
    "minLength": 10,
    "maxLength": 10,
    "regex": "^[6-9]\\d{9}$"
  }
}
```

Returns a complete list of supported countries with validation rules.

---

# 🏳️ Get SVG Flag

```js
const svg = getFlagSvg("IN");
console.log(svg);
```

### Returns

* ✅ SVG string if found
* ❌ `null` if flag not available

---

# 📘 API Reference

## `validatePhoneNumber(input, phone?)`

| Parameter | Type   | Required | Description                          |
| --------- | ------ | -------- | ------------------------------------ |
| input     | string | Yes      | ISO code, Dial code, or full number  |
| phone     | string | Optional | Required when using ISO or Dial code |

### Returns

```ts
{
  valid: boolean;
  country?: string;
  iso2?: string;
  dialCode?: string;
  flag?: string;
  nationalNumber?: string;
  error?: string;
}
```

---

## `getAllCountries()`

Returns:

* Array of all supported country objects
* Includes validation metadata and emoji flag

---

## `getFlagSvg(iso2)`

| Parameter | Type   | Description               |
| --------- | ------ | ------------------------- |
| iso2      | string | 2-letter ISO country code |

Returns:

* SVG string
* `null` if not found

---

# ⚠️ Error Types

Possible error values:

* `INVALID_INPUT`
* `INVALID_COUNTRY`
* `INVALID_DIAL_CODE`
* `INVALID_LENGTH`
* `INVALID_PHONE`

---

# 🧩 Frontend Example

```js
const result = validatePhoneNumber("+919845743298");

if (result.valid) {
  console.log("Valid:", result.country);
} else {
  console.log("Error:", result.error);
}
```

---

# 🛠 Requirements

This package uses **ES Modules**.

Ensure your `package.json` includes:

```json
{
  "type": "module"
}
```

Compatible with:

* Node.js (ESM mode)
* Modern browsers
* Bundlers like Vite, Webpack, and Next.js

---

# ✨ Features

* 🌍 International phone validation
* 📞 Multiple input formats supported
* 🏳️ Emoji and SVG flag support
* 📦 Lightweight and dependency-friendly
* ⚡ Fast validation using regex rules
* 🔌 Easy integration in frontend & backend

---

# 📦 Dependencies

This package:

* Uses ES Module syntax
* Has minimal runtime dependencies (if any)

> If your project uses CommonJS, consider dynamic import or converting to ESM.

---

# ⚙️ Configuration

No configuration required.

All country metadata and validation rules are bundled within the package.

---

# 🛠 Troubleshooting

### Issue: Module not found / import error

Ensure:

* You are using Node.js 14+
* `"type": "module"` is set in `package.json`

---

### Issue: Invalid validation results

Check:

* Correct ISO code format (e.g., `"IN"` not `"India"`)
* Dial code includes `"+"`
* National number length matches country rules

---

# 👥 Contributors

Currently maintained by the project author.

> Contributions, issues, and feature requests are welcome.

---

# 📄 License

MIT License

---
