//! Operators

// SQL operators are used to perform operations like comparisons and arithmetic calculations.
//  They are very crucial in forming queries. SQL operators are divided into the following types:

//todo Arithmetic Operators
//  These are used to perform mathematical operations. 

// Addition
// Subtraction
// Multiplication
// Division
// Modulus
// Usage

SELECT product, price, (price * 0.18) as tax
FROM products;

//todo Comparison
//  These are used in the where clause to compare one expression with another.

// = : Equal
// =! or <> : Not equal
// > : Greater than
// < : Less than
// >=: Greater than or equal
// <=: Less than or equal


SELECT name, age
FROM students
WHERE age > 18;

//todo Logical 
//  They are used to combine the result set of two different component conditions.

// AND: Returns true if both components are true.
// OR : Returns true if any one of the component is true.
// NOT: Returns the opposite boolean value of the condition.

SELECT *
    FROM employees
WHERE salary > 50000 AND age < 30;

//todo Bitwise Operators
//  These perform bit - level operations on the inputs

// & : Bitwise AND
// | : Bitwise OR
// ^ : Bitwise XOR

// Bitwise operators are much less commonly used in SQL than the other types of operators.