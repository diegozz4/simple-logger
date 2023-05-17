# Simple Logger 📝

[![Version](https://img.shields.io/npm/v/simple-logger.svg)](https://www.npmjs.com/package/simple-logger)
[![License](https://img.shields.io/npm/l/simple-logger.svg)](https://github.com/tu-usuario/simple-logger/blob/main/LICENSE)

Simple Logger is an easy to use logging library for JavaScript and Typescript, more focused for nodejs or wherever you want to use it, no third party libraries needed.

## Characteristics ✨

- Simple and efficient logging of messages including the line where the log message is established
- Configurable log levels: `debug`, `info`, `warn` and `error`.
- Function type indicator ( 🔧 Constructor, ⚙️ Function ).
- Ability to customize the format of log messages.

## Installation 🚀

To use Simple Logger in your project, you can install it via npm or Yarn:

```shell
// with npm
npm install simple-logger

// with yarn
yarn add simple-logger
```

## Usage 🔥

### JavaScript

```javascript
const Logger = require('simple-logger');

Logger.clearLog('This is an -clearLog- message')
Logger.errorLog('This is an -errorLog- message')
Logger.infoLog('This is an -infoLog- message')
Logger.successLog('This is an -successLog- message')
Logger.testLog('This is an -testLog- message')
Logger.warningLog('This is an -warningLog- message')
```

### Typscript

```typescript
import { clearLog, errorLog, infoLog, successLog, testLog, warningLog } from  'simple-logger'

clearLog('This is an -clearLog- message')
errorLog('This is an -errorLog- message')
infoLog('This is an -infoLog- message')
successLog('This is an -successLog- message')
testLog('This is an -testLog- message')
warningLog('This is an -warningLog- message')
```