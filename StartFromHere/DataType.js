//! DATA TYPE

// SQL data types define the type of data that can be stored in a database table’s column.
//  Depending on the DBMS, the names of the data types can differ slightly. Here are the general types:

//todo INT
// INT is used for whole numbers. For example:

CREATE TABLE Employees (
    ID INT,
    Name VARCHAR(30)
);

//todo DECIMAL
// DECIMAL is used for decimal and fractional numbers. For example:

CREATE TABLE Items (
    ID INT,
    Price DECIMAL(5,2)
);

//todo CHAR
// CHAR is used for fixed-length strings. For example:

CREATE TABLE Employees (
    ID INT,
    Initial CHAR(1)
);


//todo VARCHAR
// VARCHAR is used for variable-length strings. For example:

CREATE TABLE Employees (
    ID INT,
    Name VARCHAR(30)
);

//todo DATE
// DATE is used for dates in the format (YYYY-MM-DD).

CREATE TABLE Employees (
    ID INT,
    BirthDate DATE
);


//todo DATETIME
// DATETIME is used for date and time values in the format (YYYY-MM-DD HH:MI:SS).

CREATE TABLE Orders (
    ID INT,
    OrderDate DATETIME
);

//todo BINARY
// BINARY is used for binary strings.

//todo BOOLEAN
// BOOLEAN is used for boolean values (TRUE or FALSE).