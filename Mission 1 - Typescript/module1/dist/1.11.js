"use strict";
var _a, _b;
{
    //Ternary Operator
    // Optional chaining
    // Nullish Coalescing Operator
    const age = 15;
    if (age >= 18) {
        console.log('adult');
    }
    else {
        console.log('not adult');
    }
    const isAdult = age >= 18 ? 'adult' : 'not adult';
    // console.log({isAdult}); 
    //Nullish Coalescing operator 
    //Decision making based on null or undefined
    //Other things it wont work
    const isAuthentic = null;
    const result1 = isAuthentic !== null && isAuthentic !== void 0 ? isAuthentic : "Guest";
    const result2 = isAuthentic ? isAuthentic : "Guest";
    console.log({ result1 }, { result2 });
    const user = {
        name: 'Persian',
        address: {
            city: 'ctg',
            road: "Awesome",
            present: ' ctg'
        }
    };
    //Optional Chaining with nullish 
    const permanent = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.p) !== null && _b !== void 0 ? _b : 'No permanent address ';
    console.log({ permanent }); // will give permanent : No permanent address
    //
}
