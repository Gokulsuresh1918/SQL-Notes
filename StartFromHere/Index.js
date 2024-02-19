//! Indexes

// An index in SQL is a database object which is used to improve the speed of data retrieval operations 
// on a database table. Similarly to how an index in a book helps you find information quickly
//  without reading the entire book, an index in a database helps the database software find data quickly 
//  without scanning the entire table.

//todo Clustered Index
// A clustered index determines the physical order of data inside a table. 
// It sorts and stores the data rows in the table based on their key values.
// There can be only one clustered index per table.


CREATE CLUSTERED INDEX index_name
ON table_name (column_name);

//todo Non-Clustered Index
// A non-clustered index doesn’t sort the physical data inside the table. 
// Instead, it creates a separate object within a table which points back to the original
//  table rows after creating. You can create numerous non-clustered indexes per table.

CREATE NONCLUSTERED INDEX index_name
ON table_name (column_name);

//todo Indexes on Multiple Columns
// An index can be built on more than one column of a table, 
// which results in index entries having values of multiple columns.
//  This is known as a composite index.

CREATE INDEX index_name 
ON table_name (column1, column2);

//todo Unique Indexes
// A unique index doesn’t allow any field to have duplicate values 
// if the field is unique indexed. If a primary key is defined, a unique index can be applied automatically.

CREATE UNIQUE INDEX index_name
ON table_name (column_name);

//todo Explicit vs Implicit Indexes
// Indexes explicitly created by users are known as explicit indexes, 
// while indexes automatically created by SQL Server when a primary key or unique 
// constraint is defined are known as implicit indexes.

CREATE INDEX index_name
ON table_name (column_name);

//todo Full-Text Indexes
// If you’re dealing with text searching within a large string of text, 
// full-text indexes are especially helpful. These indexes do not work using
//  a standard comparison search but instead use word-breakers, filters, and noise-words (stop words).

CREATE FULLTEXT INDEX ON table_name
(column_name)
KEY INDEX index_name;