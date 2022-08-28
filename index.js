console.clear();
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
  constructor(id, firstName, lastName, taxID, salary) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.taxID = taxID;
    this.salary = salary;
  }
  generatePaySlip() {
    return `${this.id}${this.firstName} ${this.lastName},${this.taxID},${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(id, firstName, lastName, taxID, salary) {
    super(id, firstName, lastName, taxID, salary);

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

console.log(
  "-------------------------------------BONUS---------------------------------------------------"
);

// **
//  * The Reading List
//  *
//  * Create an object-oriented book-list!
//  * Write a class BookList
//  * then create another class called Book
//  *
//  * BookLists should have the following properties:
//  * Number of books marked as read
//  * Number of books marked not read yet
//  * A reference to the next book to read (book object)
//  * A reference to the current book being read (book object)
//  * A reference to the last book read (book object)
//  * An array of all the Books
//  *
//  * Each Book should have several properties:
//  * Title
//  * Genre
//  * Author
//  * Read (true or false)
//  * Read date, can be blank, otherwise needs to be a JS Date() object
//  *
//  * Every Booklist should have a few methods:
//  * .add(book) should add a book to the books list.
//  * .finishCurrentBook() which should do the following:
//  * should mark the book that is currently being read as "read"
//  * Give it a read date of new Date(Date.now())
//  * Change the last book read to be the book that just got finished
//  * Change the current book to be the next book to be read
//  * Change the next book to be read property to be the first unread book you find
//  *  in the list of books
//  *
//  * Booklists and Books might need more methods than that.
//  * Try to think of more that might be useful.
//  */

class Booklist {
  constructor() {
    this.booksRead = 0;
    this.booksNotRead = 0;
    this.nextBook = {};
    this.currentBook = {};
    this.lastBookRead = {};
    this.books = [];
  }
  addBook(...books) {
    this.books.push(...books);
    console.log("Added books", this.books);
  }
  startReadingBook(book) {
    this.currentBook = { ...book };
    return book;
  }
  finishCurrentBook(book) {
    this.currentBook = { ...book };
    this.currentBook.read = true;

    this.updateBook();

    this.currentBook.readDate = Date.now(); // Give it a read date of new Date(Date.now())

    this.lastBookRead = { ...this.currentBook }; // Change the last book read to be the book that just got finished

    this.findNextBook();
    this.currentBook = { ...this.nextBook };
    return book; // Change the current book to be the next book to be read
  }
  updateBook() {
    const updatedBookIndex = this.books.findIndex(
      (item) => item.title === this.currentBook.title
    );
    this.books[updatedBookIndex].read = true;
    this.books[updatedBookIndex].readDate = Date.now();
    console.log("Updated book is", this.books[updatedBookIndex]);
  }
  findNextBook() {
    const nextBookIndex = this.books.findIndex((item) => item.read !== false);
    if (nextBookIndex > -1) {
      this.nextBook = { ...this.books[nextBookIndex] };
      console.log("Next to be read is", this.nextBook);
    } else console.log("All books are read. You should add more");
  }
}

class Book {
  constructor(title, genre, author, read, readdate) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.read = read;
    this.readdate = null;
  }
}

const aBriefStory = new Book(
  "A brief story of 7 killings",
  "Autobiography",
  "Marlon James",
  "True",
  "January.2022"
);

const perfume = new Book(
  "Perfume",
  "Drama",
  "Patrick Süskind",
  "True",
  "March.2000"
);

const moonWitchSpider = new Book(
  "Moon Witch,Spider King",
  "Fiction",
  "Marlon James",
  "False",
  "March. 2022"
);

console.log(moonWitchSpider);

console.log(
  "-------------------------------------BOOK---------------------------------------------------"
);

const herrSommer = new Book(
  "Die Geschichte von Herr Sommer",
  "Fiction",
  "Patrick Süskind",
  "False",
  "December 1993"
);

const kirkBookList = new Booklist();

kirkBookList.addBook(moonWitchSpider);

kirkBookList.addBook(herrSommer);

kirkBookList.addBook(perfume);

kirkBookList.addBook(aBriefStory);

kirkBookList.findNextBook();
console.log(
  "-------------------------------------Cat---------------------------------------------------"
);
// **
//  * The Cat
//  *
//  * Create a virtual cat
//  * Write a class that represents a cat. It should have properties for
//  * tiredness, hunger, lonliness and happiness
//  *
//  * Next, write methods that increase and decrease those properties.
//  *
//  * Call them something that actually represents what would increase or decrease these things,
//  * like "feed", "sleep", or "pet".
//  *
//  * Last, write a method that prints out the cat's status in each area.
//  * (Be creative e.g. Paws is really hungry, Paws is VERY happy.)
//  *
//  * Bonus: Make the functions take arguments that increase or decrease arbitrary amounts
//  * Bonus: Make the functions as arbitrary as cats are -
//  * sometimes make it so the cat doesn't want to be petted.
//  */

class Cat {
  constructor(name) {
    this.tiredness = 50;
    this.hunger = 50;
    this.loneliness = 50;
    this.happiness = 50;
    this.name = name;
  }
  feedCat(amount) {
    if ((this.hunger -= amount)) {
      return `The cat is hungry, his hunger is ${this.hunger}, please feed it`;
    }
  }
  sleepyCat(amount) {
    if ((this.tiredness -= amount)) {
      return `The cat is very sleep ${amount}, please let him sleep`;
    }
  }
  petCat(amount) {
    if (this.loneliness < amount) {
      return `Leave the cat alone he might scratch you`;
    } else {
      return `Pet him, his loneliness of ${amount}, makes him in need of petting.`;
    }
  }
  happyCat(amount) {
    if (this.happiness > amount) {
      return `The cat is unhappy, try to find out what is wrong`;
    } else {
      return `Cool we have a happy cat`;
    }
  }
}

const jerry = new Cat("jerry");

console.log(jerry);

console.log(jerry.feedCat(20));
console.log(jerry.petCat(20));
console.log(jerry.sleepyCat(20));
console.log(jerry.happyCat(20));
