//Reference Type --> Object

const user : {
    //Declaring types
    readonly taka: number;
    company : 'Programming Hero'; //Literal types -> meaning the value is fixed 
    firstName : string;
    middleName? : string; //Optional type 
    lastName : string;
    isMarried : boolean;
} = {
    taka : 1000,
    company : 'Programming Hero',
    firstName :'Farhan',
    lastName :'Modi',   
    isMarried : false,
}


// user.taka = "2000"; //cannot set this due to readonly 
