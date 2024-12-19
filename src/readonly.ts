type User3={
    name:String;
    age:Number;
    email:String;
    password:number | String;
}

const data: User3={
    name:"vinayak",
    age:20,
    email:"vinayakpatle@gmail.com",
    password:43332222
}

// you can do like that // changing internally
data.age=22;
// but can't do like that
/*data={
    name:"kunal",
    age:33,
    email:"kunalhhhhh@gmail.com",
    password:4222
} */
    // here it means we are refering data to other object

const arr: number[]=[1,2,3];
// we can do like that 
arr[0]=4;  // it is internally changing
// but can't do like that
//arr=[5,6,7];


// to prevent also from internally changing user readonly or Readonly

type userx={
    readonly name:string;
    readonly age:number;
    readonly email:string;
    readonly password:string | number;
}
// or use liked that given below Readonly
const userData: Readonly<userx>={
    name:"kunal",
    age:22,
    email:"kubnl@gmail.com",
    password:334444
}

// now can't do like that also
//userData.age=33;