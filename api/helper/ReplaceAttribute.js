module.exports = class ReplaceAttribute {
  static replace(htmlString, pattern, attribute) {
    if(!Array.isArray(pattern)) return htmlString.replace(`$${pattern}`, attribute);

    attribute.forEach((attributeValue, key) => {
      htmlString = htmlString.replace(`$${pattern[key]}`, attributeValue);
    });

    return htmlString;
  }
}
