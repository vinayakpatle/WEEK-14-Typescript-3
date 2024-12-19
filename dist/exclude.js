"use strict";
const excludeHandle = (event) => {
    console.log(`Handling Event: ${event}`);
};
excludeHandle('click');
excludeHandle('process');
//excludeHandle('scroll');   //--it will give error bcoz scroll got exclude
