// INSERT INTO select
// The INSERT INTO SELECT statement is used to copy data from one table and 
// insert it into another table. Or, to insert data into specific columns from another table.

INSERT INTO table_name1 (column1, column2, column3, ...)
SELECT column1, column2, column3, ...
FROM table_name2
WHERE condition;