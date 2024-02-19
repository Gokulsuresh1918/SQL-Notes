//!GROUP BY

// ”Group By” is a clause in SQL that is used to arrange identical data into groups.
//  This clause comes under the category of Group Functions, alongside the likes of Count, Sum, Average, etc.


SELECT column1, column2
FROM table_name
GROUP BY column1, column2;

//todo Group By with Having Clause
// The Group By clause can also be used with the Having keyword.
//  The Having keyword allows you to filter the results of the group function.


SELECT Item, SUM(Amount)
FROM Sales
GROUP BY Item
HAVING SUM(Amount) > 150;