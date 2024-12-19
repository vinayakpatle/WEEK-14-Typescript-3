// partial api is use when we want to make our props optinal
type User2={
    name:string;
    age:number;
    email:string;
    password:number | string;
    id:number;
}

type updateProps2 =Pick<User2,"name" | "age" | "password">;

type updatePropsOptional=Partial<updateProps2>;

function updateCredentials2(updatedProps: updatePropsOptional){
    console.log(`Data to be update: ${updatedProps.name} ${updatedProps.age} ${updatedProps.password}`);
    // here will be backend call to change props
}

updateCredentials2({
    name:"vinayak",
    age:21
});
