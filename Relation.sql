CREATE TABLE room(
    id int AUTO_INCREMENT,
    userid int not null,
    primary key (id),
    foreign key (id) REFERENCES user(id)
);
/*HERE room table have foreign key of user id from user table */
--@block
SELECT *
FROM user
    INNER JOIN room on room.id = user.id;
/*This will give you the result as room id and user id is equal both should be true*/
--@block
SELECT *
FROM user
    LEFT JOIN room on room.id = user.id;
/*This will give you the result of all user and also  matching room ,
 means we get all user even they are not in rooms' and other dadta will be*/
--@block
SELECT *
FROM user
    RIGHT JOIN room on room.id = user.id;
/*This will give you the result of all room and also  matching userid ,
 means we get all room, even they are not in user' and other dadta will be*/
--@block
SELECT *
FROM user
    LEFT JOIN room on room.id = user.id;
UNION
SELECT *
FROM user
    RIGHT JOIN room on room.id = user.id;
/*This will give you the result of all VALURE CALLEd full join */