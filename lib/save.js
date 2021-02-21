const fs = require('fs');

const saveMd = (ansObj, str) => {
    const modName = 
        ansObj.projName
            .toLowerCase()
            .split(' ')
            .join('_') 
            + '_README.md';
    fs.writeFile('MDs/' + modName, str, 'utf8', (err) => {
        if (err) console.log(err)
        console.log(`${modName} has been saved to the directory "./MDs".`)
    });
};

module.exports = saveMd;