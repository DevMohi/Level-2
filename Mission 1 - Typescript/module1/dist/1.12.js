"use strict";
{
    //Nullable Type
    const searchName = (value) => {
        if (value) {
            console.log("searching");
        }
        else {
            console.log("There is nothing to search");
        }
    };
    searchName(null);
    //unknown type
    const getSpeed = (value) => {
        if (typeof value == 'number') {
            const convertedSpeed = value * 1000;
            console.log(` The Spped is ${convertedSpeed} ms*-1`);
        }
        else if (typeof value == 'string') {
            const [result, unit] = value.split(' ');
            console.log(result);
            const convertedSpeed = parseFloat(result) * 1000;
            console.log(` The Spped is ${convertedSpeed} ms*-1`);
        }
        else {
            console.log("Wrong input");
        }
    };
    getSpeed(`1000 kmh *-1`);
    //never type
    const throwError = (msg) => {
        throw new Error(msg);
    };
    throwError("mushkil se error hogya");
}
