

//! Advanced SQL Concepts

// Advanced SQL commands offer powerful functionality that allow you to conduct complex queries
//  and operations on your database. These include operations like Stored Procedures, Triggers, Views, 
//  and more.

//todo Stored Procedures
// A stored procedure is a prepared SQL code that you save, 
// so the code can be reused over and over again.
//  They are particularly useful when repetitive tasks need to be performed,
//   with less client-server communication.

CREATE PROCEDURE procedure_name
AS
sql_statement
GO;

//todo Triggers
// A Trigger is a SQL procedure that initiates an action when an event (INSERT, DELETE, UPDATE) occurs.
//  Triggers are useful for maintaining integrity in the database.
//   Triggers can also be used to log historical data.

CREATE TRIGGER trigger_name
ON table_name
FOR INSERT, UPDATE, DELETE
AS
-- SQL Statements

//todo Views
// A view is a virtual table based on the result-set of an SQL statement.
//  It allows you to view data that is derived from other tables. A view contains rows and columns, 
//  just like a real table. The fields in a view are fields from one or more real tables in the database.

CREATE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;

//todo JOINs
// JOINs are used to combine rows from two or more tables, based on a related column between them.
//  Types include INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN.

SELECT Orders.OrderID, Customers.CustomerName
FROM Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;

//todo Subqueries
// A subquery is a query that is embedded in the WHERE or HAVING clause of another SQL query.
//  Subqueries can return individual values or a list of records.

SELECT column_name [, column_name ]
FROM   table1 [, table2 ]
WHERE  column_name OPERATOR
   (SELECT column_name [, column_name ]
   FROM table1 [, table2 ]
   [WHERE])

//todo Set Operators
// Set operators allow the results of multiple queries to be combined into a single result set.
//  The UNION, UNION ALL, INTERSECT, and MINUS operators are some of the set operators.

SELECT column_name(s) FROM table1
UNION
SELECT column_name(s) FROM table2;