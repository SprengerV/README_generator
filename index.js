const inquirer = require("inquirer");
const fs = require("fs");

let markdown = ``
// generate raw text in md syntax

// inquirer
//     .prompt([
//         {
//             type: "input",
//             name: "projName",
//             message: "Tell me the name of your project."
//         },
//         {
//             type: "input",
//             name: "description",
//             message: "Give me a brief description of your project to be included in the ABOUT section of your README."
//         },
//         {
//             type: "input",
//             name: "tech",
//             message: "tech?",
//             validate:
//         }
//     ])
//     .then((ans) => {
//         markdown += `
//         <p align="center">
//             <h3 align="center">${ans.projName}</h3>
//         </p>



//         <!-- TABLE OF CONTENTS -->
//         <details open="open">
//             <summary>Table of Contents</summary>
//             <ol>
//                 <li>
//                 <a href="#about-the-project">About The Project</a>
//                 <ul>
//                     <li><a href="#built-with">Built With</a></li>
//                 </ul>
//                 </li>
//                 <li><a href="#installation">Installation</a></li>
//                 <li><a href="#usage">Usage</a></li>
//                 <li><a href="#testing">Testing</a></li>
//                 <li><a href="#contributing">Contributing</a></li>
//                 <li><a href="#contact">Contact</a></li>
//                 <li><a href="#license">License</a></li>
//             </ol>
//         </details>



//         <!-- ABOUT THE PROJECT -->
//         ## About The Project

//         ${ans.description}



//         `
//     });
    
// console.log(markdown);
// let builtWith = `### Built With

// <ul>
// `
// askTech = () => {
//     inquirer
//         .prompt([
//             {
//                 type: "input",
//                 name: "tech",
//                 message: "Enter one of the technologies used to build your project. This will be included in the BUILT WITH section of your README"
//             },
//             {
//                 type: "confirm",
//                 name: "more",
//                 message: "Would you like to add another technology?"
//             }
//         ])
//         .then((ans) => {
//             builtWith += `  <li>${ans.tech}<li>
//             `
//             if (ans.more) askTech();
//             else {
//                 builtWith += `</ul>
            
            
//                 `
//                 markdown += builtWith
//                 console.log(markdown);
//             }
//         });
// };




inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "Welcome to README Generator!\nTo begin, enter your name. This will be included in the CONTACT section of your README.",
            default: "Anonymous",
            // TODO: make it capitalize first letter of each word
            // filter: ,

        },
        {
            type: "input",
            name: "email",
            message: "Enter your email address. This will be included in the CONTACT section of your README.",
        },
        {
            type: "input",
            name: "gitName",
            message: "What is your GitHub user name?"
        },
        {
            type: "input",
            name: "projName",
            message: "What is the name of your project?"
        },
        {
            type: "input",
            name: "desc",
            message: "Give me a brief description of your project. This will be included in the ABOUT section of your README"
        },
        {
            type: "input",
            name: "tech",
            message: "Tell me which technologies were used to build your project. Separate different items with the tab key. Example: 'Example 1    Example 2   ...etc.'"
        },
        {
            type: "input",
            name: "usage",
            message: "Tell me the use cases for your project. This will be included in the USAGE section of your README."
        },
        {
            type: "input",
            name: "install",
            message: "Tell me the procedures for installing your application. This will be included in the INSTALL section of your README."
        },
        {
            type: "input",
            name: "test",
            message: "Tell me the procedures for testing your project. This will be included in the TESTING section of your README."
        }
    ])
    .then((answers) => {
        let techList = `<ul>
            <li>${tech.trim().split('\t').join('</li>\n\t<li>')}</li>
        </ul>
        
        
        `
        fs.writeFile(
            answers.projName + '_README.md', 
            generateMD(answers, techList), 
            (err) => err ? console.log(err) : console.log('File saved!')
        );
        console.log("Your README.md has been created at '../README.md'!")
        process.exit();
    })
    .catch((error) => {
        console.log(error);
    });


// generate markdown from template literal
const generateMD = (ans, tl) => {return `
<p align="center">
  <h3 align="center">${ans.projName}</h3>
</p>


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

${ans.desc}



### Built With

${tl}



<!-- GETTING STARTED -->
### Installation

${ans.install}



<!-- USAGE EXAMPLES -->
## Usage

${ans.usage}



<!-- TESTING -->
## Testing

${ans.test}



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

${ans.name} - [${ans.email}](email:${ans.email})

Project Link: [${ans.repoURL}](${ans.repoURL})



<!-- LICENSE -->
## License

${license}    
`}