interface user{
    name:string;
    age:number;
}

let user1: user={
    name:"Vinayak",
    age:20
}

let user2: user={
    name:"Harkirat",
    age:27
}

function sumAge(user1: user,user2: user){
    return user1.age+user2.age;
}

let ans=sumAge(user1,user2);
console.log(`sum of age is: ${ans}`);