--@block
/*reading  value in table*/
SELECT *
FROM user
    /*this one read whole value*/
    --@block
SELECT email,
    bio
FROM user
    /*this give only email and bio */
LIMIT 2
    /*this will limit return to only 2 field*/
    --@block
SELECT *
FROM user
order by id asc
    /*give output according to ascending order*/
    --@block
SELECT *
FROM user
order by id desc
    /*give output according to descending order*/
    --@block
SELECT *
FROM user
where country = 'in'
    /*Give  specific condition to retrive value*/
    --@block
SELECT *
FROM user
where country = 'in'
    and id > '1'
    /*Give  specific condition to retrive value and also id greater than */
    --@block
SELECT *
FROM user
where country = 'in'
    and email like h %
    /*Give  specific condition to retrive value and also check email starting by the charavcter H*/
    --@block
SELECT *
FROM user
where country = 'in'
    and email like %h
    /*Give  specific condition to retrive value and also check email ending by the charavcter H*/
    --@block
SELECT *
FROM user
where country = 'in'
    and email like %h%
    /*Give  specific condition to retrive value and also check email have the charavcter H*/