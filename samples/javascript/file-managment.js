const fs = require('fs');

// overwrite if file pre-exists
fs.writeFileSync('../resources/FileSample.txt', "This file is created be sample/file-management.js\n");