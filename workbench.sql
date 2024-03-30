CREATE TABLE newtable(
    id int(10),
    name varchar(123)
)

--@block
INSERT INTO newtable
values(1,'gokul');

--@block
SELECT * FROM demo
--@block
 UPDATE newtable 
 set name='Rahul'
 WHERE id=1;

--@block
SELECT * 
FROM demo 
WHERE place = 'trivandrum';

 
 --@block
 SELECT * from demo
 LIMIT 2 ,2




























-- CREATE or replace VIEW startbiew as
-- SELECT studentname,
--     age,
--     place
-- from demo;
-- CREATE VIEW startbiew as
--  SELECT studentname,age from demo;
-- SELECT CURRENT_TIMESTAMP;
-- SELECT CURRENT_TIME;
-- SELECT current_date;
-- CREATE PROCEDURE studentCount
-- AS
--     SELECT COUNT(studentname) AS TotalStudents FROM demo;
-- GO
-- SELECT place ,sum(age)
-- from demo
-- GROUP BY place
-- HAVING sum(age)<15
-- INSERT INTO newtable (studentID, studentname, age, ...)
-- SELECT studentID, studentname, age, ...
-- FROM demo
-- WHERE age =21;
-- SELECT * FROM users
-- ORDER BY id DESC;
-- ALTER TABLE chumma
-- MODIFY COLUMN demodata varchar(1000);
-- ALTER table chumma
-- drop column newcolumn;
-- ALTER TABLE chumma
-- add newcolumn int(23);
-- delete from chumma
-- WHERE demodata='new';
-- UPDATE chumma
-- set demodata="new"
-- INSERT into chumma(demodata)
-- values('veendum');
-- CREATE TABLE newtable(
--     studentID VARCHAR(32),
--     studentname VARCHAR(89),
--     age int,
--     place varchar(100)
-- );
-- INSERT INTO demo (studentID, studentname,age , place)
-- values('s10','arya',21,'vellarada');
-- UPDATE demo
-- set age=21
-- WHERE place='vellarada';
-- delete from demo 
-- WHERE studentID='s10';
-- show databases;
-- SHOW tables;
-- use db1;