/**
Objective

In this challenge, we practice using arithmetic operators. Check out the attached tutorial for resources.

Task

Complete the following functions in the editor below:

getArea(length, width): Calculate and return the area of a rectangle having sides length and width.
getPerimeter(length, width): Calculate and return the perimeter of a rectangle having sides length and width.
The values returned by these functions are printed to stdout by locked stub code in the editor.

Input Format

===========================================================================
                            getArea()
===========================================================================
Data Type     |    Parameter    |   Description                           |
===========================================================================
Number        |   length        | A number denoting length of a rectangle |
-------------------------------------------------------------------------
Number        |   height        | A number denoting height of a rectangle |
===========================================================================

===========================================================================
                            getParameter()
===========================================================================
Data Type     |    Parameter    |   Description                           |
===========================================================================
Number        |   length        | A number denoting length of a rectangle |
-------------------------------------------------------------------------
Number        |   height        | A number denoting height of a rectangle |
===========================================================================

Constraints

1 ≤ lenth, width ≤ 1000
lenth and width are scaled to at most 3 decimal places

Output Format

==================================================================================================
                      getArea()
==================================================================================================
Function            |    Return Type    |   Description                                          |
==================================================================================================
getArea             |   Number          | Area of a rectangle having sides length and width      |
-------------------------------------------------------------------------------------------------
getParameter        |   Number          | Parameter of a rectangle having sides length and width |
==================================================================================================

Sample Input 0

3
4.5
Sample Output 0

13.5
15
Explanation 0

The area of the rectangle is length x width = 3 x 4.5 = 13.5. 
The perimeter of the rectangle is 2(length + width) = 2(3 + 4.5) = 15.

*/

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/**
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the rectangle's area.
**/
function getArea(length, width) {
    let area;
    // Write your code here
    area = length * width;
    
    return area;
}

/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    perimeter = (2 * (length + width));

    return perimeter;
}

// Code provided
function main() {
    const length = +(readLine());
    const width = +(readLine());
    
    console.log(getArea(length, width));
    console.log(getPerimeter(length, width));
}
