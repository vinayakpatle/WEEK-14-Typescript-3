type userT={
    name:string;
    age:number;
    email:string;
}

/*type users={
    [key: string]:userT,
}*/

// instead of dealing with object like that given above we can use Record to give type in a cleaner way

type users=Record<string,userT>;


const dataUser: users={
    "abc1":{
        name:"vina",
        age:22,
        email:'vina@gmail.com'
    },
    "abc2":{
        name:"harki",
        age:25,
        email:"harki@gmail.com",
    }
}


console.log(dataUser["abc2"].name);
console.log(dataUser["abc1"].email);