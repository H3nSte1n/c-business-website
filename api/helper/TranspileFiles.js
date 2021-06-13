const fs = require('fs');

module.exports = class TranspiledFiles {
  static transpile(extension, files) {
    const transpiledFiles = [];

    require.extensions[extension] = function (module, filename) {
      module.exports = fs.readFileSync(filename, 'utf8');
    };

    files.forEach((filePath) => {
      transpiledFiles.push(require(filePath));
    });

    return transpiledFiles;
  }
};
