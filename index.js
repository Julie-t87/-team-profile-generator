const fs = require('fs');
const { generateHTML } = require('./lib/generateHTML')
const inquirer = require('inquirer');


let employees = []
console.log('Use this to build a team profile')

async function employeeQuestions() {
    const employee = await inquirer.prompt([

    {
        type: 'input',
        name: 'empName',
        message: 'Please enter employee name.',
        validate: empName => {
            if (empName) {
            return true;
        } else {
            console.log('Please enter a valid employee name');
            return false;
        }
    }
},
{
    type: 'list',
    name:'role',
    message: 'What is your role at our company?',
    choices: ['Manager', 'Engineer', 'Intern']
},
{
    type:'input',
    name: 'email',
    message: 'Enter an employee email address.',
    validate: email => {
        if (email) {
            return true;
        } else {
            console.log('Please enter a valid employee email address.')
            return false;
        }
    }
}
    ])

    let employeeObject = employee

    let manager
    if (employee.role === 'Manager') {
        manager = await inquirer.prompt([
            {
				type: 'input',
				name: 'managerId',
				message: "Please enter a manager ID number.",
				validate: managerId => {
					if (managerId) {
						return true;
					} else {
						console.log("Please enter a valid manager ID number. ")
						return false;
					}
				}
			},
			{
				type: 'input',
				name: 'managerOffice',
				message: "Please enter a manager office number.",
				validate: managerOffice => {
					if (managerOffice) {
						return true;
					} else {
						console.log("Please enter a valid manager ID number.")
					}
				}
			}
        ])
        if (manager) {
            employeeObject = { ...employeeObject,manager }
            employees.push(employeeObject);
        }
    }

    let engineer
	if (employee.role === 'Engineer') {
		engineer = await inquirer.prompt([
			{
				type: 'input',
				name: 'engineerId',
				message: "Please enter an engineer ID",
				validate: engineerId => {
					if (engineerId) {
						return true;
					} else {
						console.log("Please enter a valid engineer ID")
					}
				}
			},
			{
				type: 'input',
				name: 'github',
				message: "Please enter a GitHub link",
				validate: engineerGithub => {
					if (engineerGithub) {
						return true;
					} else {
						console.log("Please enter a valid GitHub link")
						return false;
					}
				}
			}
		])
		if (engineer) {
			employeeObject = { ...employeeObject, engineer }
			employees.push(employeeObject);
		}
	}


	let intern
	if (employee.role === 'Intern') {

		intern = await inquirer.prompt([
			{
				type: 'input',
				name: 'internId',
				message: "Please enter an intern ID",
				validate: internId => {
					if (internId) {
						return true;
					} else {
						console.log("Please enter a valid intern ID")
					}
				}
			},
			{
				type: 'input',
				name: 'intSchool',
				message: "What school is the intern attending",
				validate: intSchool=> {
					if (intSchool) {
						return true;
					} else {
						console.log("What school is the intern attending")
						return false;
					}
				}
			}
		])
		if (intern) {
			employeeObject = { ...employeeObject, intern }
			employees.push(employeeObject);
		}




	}

	const newEmployeeQuestions = await inquirer.prompt([
		{
			type: 'confirm',
			name: 'newEmployee',
			message: "Would you like to enter a new employee?"
		}
	])

	if (newEmployeeQuestions.newEmployee) {
		
		employeeQuestions()
	} else {
		
	
		
		
	let returned = generateHTML(employees)
	if (returned) {
			writeFile('./dist/teamprofile.html', returned);
			console.log('Your file was successfully created!')
		} else {
			console.log("There was an error");
		}
	}
};

const writeFile = (fileName, data) => {
	return new Promise((resolve, reject) => {
		fs.writeFile(fileName, data, err => {
			if (err) {
				reject(err);
				console.log(error)
				return;
			}
			resolve({
				ok: true,
				
			});
		});
	});
};


employeeQuestions();