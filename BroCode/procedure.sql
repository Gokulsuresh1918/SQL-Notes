CREATE PROCEDURE chumma(IN id INT)
BEGIN
    SELECT *
    FROM course
ENd$$


/*to call this*/
call chumma(1)