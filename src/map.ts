// here more cleaner way to create object by using map() set to set new key:value  get to fetch and delete to delete key:value
// map is not came from typescript you can use it in javascript


type userType={
    name:string;
    age:number;
    email:string;
}

const users=new Map<string,userType>();

users.set("abc11",{name:"harkirat",age:26,email:"harkirat@gmail.com"});
users.set("abc22",{name:"kunal",age:27,email:"kunal@gmail.com"});
users.set("abc33",{name:"vinayak",age:20,email:"vinayak@gmail.com"});

const user11=users.get("abc11");
const user22=users.get("abc22");
const user33=users.get("abc33");
console.log(user11);
console.log(user22);
console.log(user33);

users.delete("abc22");
console.log("-------------------gap------------------");

console.log("after deletion---------------");
console.log(users);