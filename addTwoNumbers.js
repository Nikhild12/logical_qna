// You are given two non - empty linked lists representing two non - negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.Add the two numbers and 
// return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Input: l1 = [0], l2 = [0]
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]

let addTwoNumber = function (l1, l2) {
    let result = [];
    let carry = 0;
    let i = 0; j = 0;
    while (i < l1.length || j < l2.length || carry > 0) {
        let val1 = i < l1.length ? l1[i] : 0;
        let val2 = j < l2.length ? l2[j] : 0;
        let sum = val1 + val2 + carry;
        result.push(sum % 10);
        carry = Math.floor(sum / 10)
        i++;
        j++;
    }
    return result
}

module.exports = addTwoNumber