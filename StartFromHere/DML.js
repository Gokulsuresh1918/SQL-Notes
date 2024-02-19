

//!Data Manipulation Language (DML)

// DML is a subcategory of SQL which stands for Data Manipulation Language.
//  The purpose of DML is to insert, retrieve, update and delete data from the database.
//   With this, we can perform operations on existing records.



//todo INSERT INTO 
// This command is used to insert new rows (records) into a table.

INSERT INTO table_name ( column1, column2, column3, ... )  
VALUES ( value1, value2, value3, ... )  

//todo SELECT 
//  This command is used to select data from a database.
//  The data returned is stored in a result table, called the result-set.

SELECT column1, column2, ... 
FROM table_name

//todo UPDATE 
// This command is used to modify the existing rows in a table.

UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;

//todo DELETE FROM 
//  This command is used to delete existing rows (records) from a table.


DELETE FROM table_name WHERE condition;