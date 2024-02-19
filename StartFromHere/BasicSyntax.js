//! Basic SQL Syntax


//todo SELECT
// The SELECT statement is used to retrieve data from a database.
//  The data returned is stored in a result table, called the result-set.

SELECT column1, column2 FROM table_name;

//todo INSERT INTO 
// The INSERT INTO statement is used to insert new rows of data in a table.

INSERT INTO table_name(column1, column2, column3)
VALUES(value1, value2, value3);

//todo UPDATE statement
// The UPDATE statement is used to modify existing records in a table.

UPDATE table_name
SET column1 = value1, column2 = value2
WHERE condition;

//todo DELETE
// The DELETE statement is used to remove rows from a table.
    
DELETE FROM table_name WHERE condition;

//todo  CREATE TABLE
// The CREATE TABLE statement is used to create a new table in a database.

CREATE TABLE table_name (
    column1 datatype constraints,
    column2 datatype constraints,
    column3 datatype constraints
);

//todo ALTER TABLE
// The ALTER TABLE statement is used to add, 
// delete/drop or modify columns in the existing table. 
// It is also used to add and drop constraints on the existing table.

// -- To add a column
ALTER TABLE table_name
ADD column_name datatype;

// -- To delete/drop column
ALTER TABLE table_name
DROP COLUMN column_name;

// -- To modify existing column
ALTER TABLE table_name
MODIFY COLUMN column_name datatype;

//todo DROP TABLE
// The DROP TABLE statement is used to drop an existing table in a database.

DROP TABLE table_name;




