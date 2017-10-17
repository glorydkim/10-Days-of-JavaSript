/*

Objective

In this challenge, we practice looping over the characters of string. Check out the attached tutorial for more details.

Task

Complete the vowelsAndConsonants function in the editor below. It has one parameter, a string, s, 
consisting of lowercase English alphabetic letters (i.e., a through z). The function must do the following:

1. First, print each vowel in s on a new line. The English vowels are a, e, i, o, and u, and each vowel 
must be printed in the same order as it appeared in s.
2. Second, print each consonant (i.e., non-vowel) in s on a new line in the same order as it appeared in s.

Input Format

Locked stub code in the editor reads string s from stdin and passes it to the function.

Output Format

First, print each vowel in s on a new line (in the same order as they appeared in s). 
Second, print each consonant (i.e., non-vowel) in s on a new line (in the same order as they appeared in s).

Sample Input 0

javascriptloops
Sample Output 0

a
a
i
o
o
j
v
s
c
r
p
t
l
p
s

Explanation 0

Observe the following:

Each letter is printed on a new line.
Then the vowels are printed in the same order as they appeared in s.
Then the consonants are printed in the same order as they appeared in s.

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

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    
    let vowels = ["a", "e", "i", "o", "u"];

    for(let v of s) {
        if(vowels.includes(v))
            console.log(v);
    }
    
    for(let v of s) {
        if(!vowels.includes(v))
            console.log(v);
    }
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}
