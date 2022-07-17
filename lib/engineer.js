const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(engineerGithub, engineerId) {
        super();
        this.engineerGithub = engineerGithub;
        this.ID = engineerId;
    }

    // This gets the engineer's github link
    github() {
        return this.engineerGithub
    }

    // This gets the Engineer's role which is Engineer
    role() {
        return Engineer
    }

    getId() {
        return this.engineerId;
    }
}


module.exports = Engineer;