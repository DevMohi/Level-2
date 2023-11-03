//Learning function

//Normal and Arrow

//Normal

//default value is 10 here 

//The block scope used here so that we can use variables in other files 

{

function add (a : number,b : number = 10): number {
    return a+b;
}

add(2);

//Arrow 
const addArrow = (a: number , b: number): number => a+b;

addArrow(2,4);

//object -> function -> method
// object er bhitor function likle oitake method bolbo 
const poorUser = {
    name : 'Mezba',
    balance : 0,
    addBalance (balance : number) : string{
        return `My new balance is ${this.balance + balance}`;
    }
}

const arr : number[] = [1,4,10];
const newArray :number[] = arr.map((elem : number): number => elem * elem);

}