const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(intSchool, internId) {
        super();
        this.intSchool = this.intSchool;
        this.internId = internId;
    }

    // This gets the intern's school
    school() {
        return this.intSchool
    }

    // This gets the interns role which is intern
    role() { 
        return Intern
    }

    // This get the intern's employee Id
    getId() {
        return this.internId;
    }
}

module.exports = Intern;