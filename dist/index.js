"use strict";
let user1 = {
    name: "Vinayak",
    age: 20
};
let user2 = {
    name: "Harkirat",
    age: 27
};
function sumAge(user1, user2) {
    return user1.age + user2.age;
}
let ans = sumAge(user1, user2);
console.log(`sum of age is: ${ans}`);
