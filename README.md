# Team Profile Generator
[![GitHub](https://img.shields.io/github/license/thompson-1657/professional_readme_generator?color=%230288d1)](LICENSE)

## Description
---
This application is a command line run application utilizing node.js to generate a custom team profile for the user. 

## Table of Contents
---
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Credits](#credits)
* [License](#license)
* [Technologies](#technologies)
* [Questions](#questions)
        
## Installation
---
To install the application start by cloning the application from the repository. Once cloned run
```
 npm install 
```
in the terminal to install the npm package dependency,   [inquirer](https://www.npmjs.com/package/inquirer), as well as the devDependency, [jest](https://jestjs.io/). The application itself can then be run in the terminal by invoking 
```
node app.js
```
The user will the be directed to submit answers via the command line. Once all areas are filled out a team.html file will be generated in the output folder. The user can open the team.html in the browser to view their custom team profile containing all of the information they entered about each team member.
        
## Usage
---
In the command line the user, in this case the manager, can pick types of employees they want to be on their team. Each type of selected employee has questions the user will need to answer about them. All employees have have a name, an Id, and an email. Then, branching off of that, each type of employee will have other questions to be answered based on their position. The manager will have an office number, the engineer will have a GitHub username, and the intern will have a school that they attend.

<img width="560" alt="Screen Shot 2021-01-21 at 12 42 46 PM" src="https://user-images.githubusercontent.com/71091515/105398375-ea375580-5be7-11eb-8f5c-5955291b3bdd.png">

The user can add as many employees to their team as they would like. The command line will keep prompting these selections until the user chooses "Finished adding team members". 

<img width="444" alt="Screen Shot 2021-01-21 at 12 43 26 PM" src="https://user-images.githubusercontent.com/71091515/105398520-1521a980-5be8-11eb-9b28-b1434dcbb33f.png">

Once the user has finished adding team members the application will write a file called team.html that can be located in the output file of the application. 

<img width="127" alt="Screen Shot 2021-01-21 at 12 44 03 PM" src="https://user-images.githubusercontent.com/71091515/105398699-4ac69280-5be8-11eb-937c-c011bfa58dbd.png">

The team.html file can be opened in the web browser and will display the entire team profile with all of the information the user added for each employee. 

<img width="690" alt="Screen Shot 2021-01-21 at 1 09 27 AM" src="https://user-images.githubusercontent.com/71091515/105398833-6df14200-5be8-11eb-8832-89a609ef7877.png">

The team profile will be a quick and easy reference for the user to see not only who is on their team, but contact information as well. Instead of being overwhelmed with locating individual team members information while completing the project the team has quick and easy access to all members, allowing optimization of time management and organization.

Click here for a full video demo:
[![recording](https://user-images.githubusercontent.com/71091515/105724264-49011580-5eed-11eb-954b-79b7efa939f5.gif)](https://drive.google.com/file/d/1sQMrXzhODbAj4BH88r2h5B-Zr0qbK-27/view)


## Tests
---
Tests for the application were run using Jest, JavaScript testing framework. The tests in place ensure that the code that was written performs and provides the expected outcome to make the application runs as intended. Opening a terminal in the test folder and executing
```
npm run test
```
will result in the application passing 17 out of 17 total tests. By passing these tests that were set in place the code written is being executed efficiently with no unwanted side effects.

## Technologies
---
* HTML5
* CSS3
* JavaScript
* Node.js
        
## Credits
---
Image for jumbotron sourced from: https://blog.ohhdeer.com/home/wallpaper-of-the-month-october?rq=wallpaper on January 20, 2021
        
## License
---
[MIT License](LICENSE)
        
## Questions
---
If you have any questions regarding the functionality or use of this application feel free to contact me via the information below.

GitHub: [thompson-1657](https://github.com/thompson-1657)

Email: thompson.1657@gmail.com