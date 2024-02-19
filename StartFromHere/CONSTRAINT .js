

//!CONSTRAINT 

// In SQL, a CONSTRAINT is a rule defined on a table column to enforce data integrity.
//  Constraints specify certain conditions that must be satisfied for data to be entered 
//  into or updated within a table. They help maintain the accuracy and consistency of data 
//  in a database by preventing the entry of invalid or inconsistent values.


//todo Primary Key Constraint:

// Ensures that each row in a table can be uniquely identified by a specific column or combination of columns. 
// The primary key constraint prevents duplicate and null values in the specified columns.

CREATE TABLE ExampleTable (
  ID INT PRIMARY KEY,
  Name VARCHAR(50)
);

//todo Unique Constraint:

// Ensures that all values in a particular column (or combination of columns) are unique.
//  Unlike the primary key constraint, a unique constraint allows null values.


CREATE TABLE ExampleTable (
  Email VARCHAR(255) UNIQUE,
  Name VARCHAR(50)
);

//todo Foreign Key Constraint:

// Establishes a relationship between two tables by linking a column in one table to the primary key
//  column in another table. The foreign key constraint ensures referential integrity.

CREATE TABLE Orders (
  OrderID INT PRIMARY KEY,
  ProductID INT,
  FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);


//todo Check Constraint:

// Specifies a condition that must be satisfied for values entered into a column.
//  It allows you to define custom rules for data validation.

CREATE TABLE Employees (
  EmployeeID INT,
  Salary DECIMAL(10, 2) CHECK (Salary >= 0)
);


//todo Default Constraint:

// Sets a default value for a column, which is used when a new row is inserted without specifying 
// a value for that column.

CREATE TABLE ExampleTable (
  ID INT,
  Name VARCHAR(50),
  Status VARCHAR(20) DEFAULT 'Active'
);