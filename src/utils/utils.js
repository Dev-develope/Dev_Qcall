import { parsePhoneNumberFromString } from "libphonenumber-js";
export function isValidPhoneNumber(phoneNumber) {
    try {
      const parsedPhoneNumber = parsePhoneNumberFromString(phoneNumber);
      return parsedPhoneNumber && parsedPhoneNumber.isValid();
    } catch (error) {
      return false;
    }
  }

  export function convertToE164(formattedValue) {
    // Remove all non-digit characters from the formatted value
    const digitsOnly = formattedValue.replace(/\D/g, "");
    // If the first character is not '+', add it
    if (digitsOnly[0] !== "+") {
      return `+${digitsOnly}`;
    }
    return digitsOnly;
  }