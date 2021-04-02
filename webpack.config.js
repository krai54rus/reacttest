const path = require('path');
const appPath = path.join(__dirname);
// Основной JS файл в который мы будем подключать все, что нам необходимо
const jsPath = path.join(appPath, "/src/index.js");

module.exports = {
  entry:{
    main: jsPath,
  },
  output:{
    filename: '[name].js',
    path: appPath + '/build',
  },
  loaders:{

  },
  plugins:{

  }
}
