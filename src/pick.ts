// pick api let's you to create new type by selecting some properties from existing type(basically subset of existing type);
// allowed to apply on both type and interface

type User={
    name:string;
    age:number;
    email:string;
    password:number | string;
    id:number;
}

type updateProps =Pick<User,"name" | "age" | "password">;

function updateCredentials(updatedProps: updateProps){
    console.log(`Data to be update: ${updatedProps.name} ${updatedProps.age} ${updatedProps.password}`);
    // here will be backend call to change props
}

updateCredentials({
    name:"vinayak",
    age:21,
    password:44332211
});

