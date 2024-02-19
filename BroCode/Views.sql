--@block this is called self join meand one table join on self
SELECT a.firstname,
    a.lastname.concat(b.firstname, '', b.lastname)
FROM course
    INNER JOIN employes as b on a.superbisorID = b.employesID;
--@block
/*Views is a virtual table ,fields are from one or more real table in the database
 they are not real table but they act as like that*/
create viewname as
select course_name
FROM course;
--@blocknamee
SELECT *
FROM namee
 --@block
 use db1;
    DROP view namee