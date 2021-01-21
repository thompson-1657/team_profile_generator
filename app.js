const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const teamMember = [];
function app() {
    function addManager() {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is your name?",
                    name: "managerName",
                },
                {
                    type: "input",
                    message: "What is your Id?",
                    name: "managerId",
                },
                {
                    type: "input",
                    message: "What is your email?",
                    name: "managerEmail",
                },
                {
                    type: "input",
                    message: "",
                    name: "managerOfficeNumber",
                },
            ]).then(response => {
                const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber)
                teamMember.push(manager);
                addNewTeamMember();
            })
    }



    function addEngineer() {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is the engineer's name?",
                    name: "engineerName",
                },
                {
                    type: "input",
                    message: "What is the engineer's Id?",
                    name: "engineerId",
                },
                {
                    type: "input",
                    message: "What is the engineer's email?",
                    name: "engineerEmail",
                },
                {
                    type: "input",
                    message: "What is the engineers GitHub username?",
                    name: "engineerGithub",
                },
            ]).then(response => {
                const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub)
                teamMember.push(engineer);
                addNewTeamMember();
            })
    }





    function addIntern() {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is the name of the intern?",
                    name: "internName",
                },
                {
                    type: "input",
                    message: "What is the intern's Id?",
                    name: "internId",
                },
                {
                    type: "input",
                    message: "What is the intern's email?",
                    name: "internEmail",
                },
                {
                    type: "input",
                    message: "What school does the intern attend?",
                    name: "internSchool",
                },
            ]).then(response => {
                const intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool)
                teamMember.push(intern);
                addNewTeamMember();
            })
    }



    function addNewTeamMember() {
        inquirer
            .prompt([
                {
                    type: "list",
                    name: "selectedEmployees",
                    message: "Which type of employees would you like to add to your team?",
                    choices: [
                        "manager",
                        "engineer",
                        "intern",
                        "Finished adding team members"
                    ]

                }
            ]).then(response => {
                const role = response.selectedEmployees;
                if (role == "manager") {
                    addManager()
                } else if (role == "engineer") {
                    addEngineer()
                } else if (role == "intern") {
                    addIntern()
                } else if (role == "Finished adding team members") {
                    renderTeam()
                }
            })
    }
    addNewTeamMember()
}





function renderTeam() {
    fs.writeFile(outputPath, render(teamMember), function (err) {
        if (err) return console.log(err);
        console.log('Your team profile is ready!');
    })
}

app();







// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
