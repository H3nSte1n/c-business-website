const fs = require('fs');

module.exports = class TranspiledFiles {
  static transpile(extension, files) {
    console.log('test');
    const transpiledFiles = [];

    require.extensions[extension] = function (module, filename) {
      module.exports = fs.readFileSync(filename, 'utf8');
    };

    files.forEach(filePath => {
      transpiledFiles.push(require(filePath));
    })

    console.log('transpiledFiles:', transpiledFiles)

    return transpiledFiles;
  }
}
