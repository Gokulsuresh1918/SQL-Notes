CREATE DATABASE mydb;
/*creating a read only database*/
ALTER DATABASE mydb READ ONLY = 1 --@block
/*Deleteing a read only database canit use drop methiud*/
ALTER DATABASE mydb READ ONLY = 0 --@block
use db1;
/*Rename a table*/
Rename table user to users;
--@block 
/*adding a new field*/
ALTER TABLE users
Add demo varchar(5);
--@block used to deletea a column
ALTER table users DROP column demo;
--@block updata a column here i updadted email 
UPDATE users
set email = 'poda@gmail.com'
WHERE id = 2 --@block COMMEN
    CREATE TABLE testdate(
        dates date,
        nowtime time,
        nowdatetime datetime
    );
--@block DATE DATA TYPE 
INSERT into testdate
VALUES(current_date(), current_time(), NOW());
--@block using unique feature after creatinga a table
ALTER TABLE testdate
add constraint unique(nowtime) 
--@block adding check constraint to the table 
/*this help to check following condition is satisfrd while insertign a value*/
alter table testdate
add constraint check_demo check(nowdatetime <= 0) 
--@block
SELECT *
FROM testdate