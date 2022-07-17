class Employee {
    constructor(empName, email) {

        this.empName = empName;
        this.email = email;
    }

    // This will get the employees name
    getName() {
        return this.empName;
    }

    //this will get the employees email
    getEmail() {
        return this.email;
    }
}

module.exports = Employee;