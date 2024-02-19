//! Views

// SQL views are virtual tables that do not store data directly.
//  They are essentially a saved SQL query and can pull data from multiple tables 
//  or just present the data from one table in a different way.

//todo Creating Views

CREATE VIEW CustomerView AS
SELECT CustomerID, Name, Address
FROM Customers;

//todo Querying Views

// After a view has been created, it can be used in the FROM clause of a SELECT statement,
//  as if it’s an actual table. For instance, to select all from CustomerView:

SELECT *
FROM CustomerView;

//todo Updating Views

// The CREATE OR REPLACE VIEW statement is used to update a view. 
// Consider the CustomerView we created earlier. If we want to include the customer’s phone, 
// we can update it as follows:

CREATE OR REPLACE VIEW CustomerView AS
SELECT CustomerID, Name, Address, Phone
FROM Customers;

//todo Dropping Views

// To delete a view, use the DROP VIEW statement:

DROP VIEW CustomerView;