{
    //Ternary Operator
    // Optional chaining
    // Nullish Coalescing Operator

    const age : number= 15;

    if(age >= 18){
        console.log('adult');
    }
    else{
        console.log('not adult');
    }

    const isAdult = age >= 18? 'adult' : 'not adult';
    // console.log({isAdult}); 

    //Nullish Coalescing operator 
    //Decision making based on null or undefined
    //Other things it wont work
    const isAuthentic = null;
    const result1 = isAuthentic ?? "Guest";
    const result2 = isAuthentic ? isAuthentic : "Guest";
    console.log({result1}, {result2});



    type User = {
        name: string,
        address: {
            city : string,
            road : string,
            present : string,
            p?:string,
        }
    }

    const user: User = {
        name : 'Persian',
        address: {
            city: 'ctg',
            road : "Awesome",
            present :' ctg'
        }
    }
    //Optional Chaining with nullish 
    const permanent = user?.address?.p ?? 'No permanent address ';
    console.log({permanent}); // will give permanent : No permanent address

    //
}