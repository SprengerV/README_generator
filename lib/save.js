const fs = require('fs');

const saveMd = (ansObj, str) => {
    const modName = 
    ansObj.projName
        .toLowerCase()
        .split(' ')
        .join('_') 
        + '_README.md';
    fs.writeFile(modName, str, 'utf8', (err) => {
        err ? console.log(err) : console.log(`${modName} has been saved to the working directory.`)
    });
};

module.exports = saveMd;