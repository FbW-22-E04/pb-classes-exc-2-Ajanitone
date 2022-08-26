// # Extending Classes

// #### 1. Employee Class

// - Create an `Employee` class which accepts:

//   - `id` of the employee as a number
//   - `firstName` of the employee as a string
//   - `lastName` of the employee as as string
//   - `taxId` as a number
//   - `salary` as a number

// - The `Employee` class should have a `generatePaySlip` method which returns:

// ```
//        Employee ID: id
//        Name: firstName lastName
//        Tax ID: taxId
//        Pay: monthlySalary --> will need to be calculated based off of salary
// ```

// #### 2. Manager Class

// - Create a `Manager` class which extends the `Employee` class

// - The `Manager` class will need the addition of a `managedEmployees` array

// - The `Manager` class will need two methods:
//   - `addManagedEmployee` to add a managed employe to the `managedEmployees` array
//   - `removeManagedEmployee` to remove a managed employee from the `managedEmployees` array

class Employee {
  constructor(id, firstname, lastname, taxID, salary) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.taxID = taxID;
    this.salary = salary;
  }
  generatePaySlip() {
    return `${this.id}${this.firstname} ${this.lastname},${this.taxID},${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(id, firstname, lastname, taxID, salary) {
    super(id, firstname, lastname, taxID, salary);

    this.ManagedEmployees = [];
  }
  addManagedEmployees(employ) {
    return this.ManagedEmployees.push(employ);
  }
  removeManagedEmployee(managedEmployee) {
    this.ManagedEmployees = this.ManagedEmployees.filter(
      (item) => item.id !== managedEmployee.id
    );
    return this.ManagedEmployees;
  }
}
const Hizkiel = new Employee(3, "Hizkiel", "Bigman", 1605593, 7000);
const Tania = new Employee(4, "Tania", "Hensen", 1605594, 8000);

const manager = new Manager(1, "Kirk", "McDowell", 1605592, 5000);

const newEmployee = new Manager(2, "Chris", "Tree", 1605593, 6000);

newEmployee.addManagedEmployees(Hizkiel);
newEmployee.addManagedEmployees(Tania);

console.log(newEmployee);

newEmployee.removeManagedEmployee(Tania);

console.log(newEmployee);
