"use strict";
function updateCredentials2(updatedProps) {
    console.log(`Data to be update: ${updatedProps.name} ${updatedProps.age} ${updatedProps.password}`);
    // here will be backend call to change props
}
updateCredentials2({
    name: "vinayak",
    age: 21
});
