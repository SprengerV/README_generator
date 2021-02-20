const techList = require('./generateTl.js');
const license = require('./license.js');

// generate markdown from template literal
const generateMd = (ansObj, tl) => {return `
<p align="center">
  <h3 align="center">${ansObj.projName}</h3>
</p>

${license.genBadge(ansObj)}

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#testing">Testing</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

${ansObj.desc}



### Built With

${tl}



<!-- GETTING STARTED -->
### Installation

${ansObj.install}



<!-- USAGE EXAMPLES -->
## Usage

${ansObj.usage}



<!-- TESTING -->
## Testing

${ansObj.test}



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your Changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the Branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request



<!-- CONTACT -->
## Contact

${ansObj.name} - [${ansObj.email}](email:${ansObj.email})

Project Link: [${ansObj.repoURL}](${ansObj.repoURL})



<!-- LICENSE -->
## License

${license.genLicense(ansObj)}    
`}

module.exports = generateMd;