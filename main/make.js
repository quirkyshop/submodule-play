const fs = require('fs');
const path = require('path');

fs.writeFileSync(path.join(__dirname, 'random'), new Date().getTime())
