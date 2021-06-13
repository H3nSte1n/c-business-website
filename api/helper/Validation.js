/* eslint-disable no-unused-vars */
import xssFilters from 'xss-filters';
import validator from 'validator';

export class Validation {
  static validateAndSanitize(key, value) {
    const rejectFunctions = new Map([
      ['name', (v) => v.length < 2],
      ['email', (v) => !validator.isEmail(v)],
      ['msg', (v) => v.length > 6500],
    ]);

    // If map has key and function returns false, return sanitized input. Else, return false
    return rejectFunctions.has(key) && !rejectFunctions.get(key)(value) && xssFilters.inHTMLData(value);
  }
}
