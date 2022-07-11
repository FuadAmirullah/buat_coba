// const person = {
//   name: "John",
//   age: 30,
//   isMarried: false,
// };
// delete person.isMarried;

// //person.hobby("cooking");

// console.log(person.name);
// console.log(person.age);

// function makeUser(name, age) {
//   return {
//     name: name,
//     age: age,
//   };
// }

// let user = makeUser("Budi", 30);
// console.log(user.name); // result: Budi

// let user = { name: "Andi", age: 20 };
// console.log("age" in user); // result: true
// console.log("isMarried" in user); // result: false

// let anotherUser = { name: "Budi", age: 30 };
// let key = "age";
// console.log(key in anotherUser); // result: true

//

let word = "hello world";

var stack = new Stack();
for (let i = 0; i < word.length; i++) {
  stack.push(word.charAt(i));
}

let reversed = "";
while (!stack.isEmpty()) {
  let ch = stack.pop();
  reversed += ch;
}

console.log(reversed);
