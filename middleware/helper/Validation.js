import xssFilters from 'xss-filters'
import validator from 'validator'

export class Validation {
  rejectFunctions = new Map([
    [ 'name', v => v.length < 4 ],
    [ 'email', v => !validator.isEmail(v) ],
    [ 'msg', v => v.length < 25 ]
  ])

  static validateAndSanitize (key, value) {
    // If map has key and function returns false, return sanitized input. Else, return false
    return this.rejectFunctions.has(key) && !this.rejectFunctions.get(key)(value) && xssFilters.inHTMLData(value)
  }
}


