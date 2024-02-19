/*Createing table*/
CREATE TABLE user(
    id int primary key AUTO_INCREMENT,
    /* in here (int) data type and it is a( primary key )
     (auto increment) this is used to increment automatically
     like first valur is 1 then its automatically add addictional valuea*/
    email VARCHAR(200) not null unique,
    /*here varchar is the datatype and it cant be null 
     (unique) is used to avoid repetation of email*/
    bio text,
    /*text datatype to store more data*/
    country VARCHAR(10)
)
--@block
/*inserting value to  table*/
insert into user(email, bio, country)
/*Like this we can insert multiple valur
 to the table*/

values ('sdlfsd@gmail.com', 'good', 'in'),
    ('asddff@gmail.com', 'avg', 'us'),
    ('sgokul@gmail.com', 'bad', 'uk');