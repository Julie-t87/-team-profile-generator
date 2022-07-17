const Employee = require('../lib/Employee');


class Manager extends Employee {
    constructor(managerOffice, managerID) {
        super();
    this.managerOffice = managerOffice;
    this.managerId = this.managerId;
    }

    // this will get the manager's office number
    officeNumber() {
        return this.managerOffice
    }

    // this will define the managers role which is Manager
    role() {
        return Manager;
    }

    // this will get the managers employee/manager ID number
    getId() {
        return this.managerId;
    }
}


module.exports = Manager;