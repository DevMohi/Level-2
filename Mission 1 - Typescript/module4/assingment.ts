// Problem 1
const calculateLengthSquare = (param: string | number): number => {
  if (typeof param === "string") {
    const length = param.length;
    return length;
  } else if (typeof param === "number") {
    const squaredNumber = param * param;
    return squaredNumber;
  } else {
    return 0;
  }
};

// const stringLength = calculateLengthSquare(5); 
const stringLength = calculateLengthSquare("next level web development") 
// console.log(stringLength); 



//Problem 2

interface Person { 
  address? : {
    city: string;
    street : string;
  }
  phone ? :number;

}

const getAddressCity = (person : Person) : string | undefined => {
  return person.address?.city;
}


//Problem3 - nstanceof is an operator in TypeScript, which checks if an object is an instance of a specific class or a constructor function. The Instanceof also takes inheritance into account. It returns true if the object inherits from the class's prototype.

class Cat{
  public name : string;
  public species : string;

  constructor(name:string , species : string){
    this.name = name;
    this.species = species;
  }
}

const isCat = (obj : Cat) : string => {
  if(obj instanceof Cat === true){
    return "yes its a cat";
  }
  else{
    return "no, it's not a cat"
  }
}

const cat = new Cat("mili", "persian")
// console.log( isCat(cat)); 




// problem 4
const addNumber =(mixedData:(number|string)[]):number=>{
  let total = 0
  for(const num of mixedData){
      if(typeof num === 'number'){
          total = total+num as number
      }
  }
  if(total !== 0){
      return total as number
  }
  else{
      return 0 
  }
}

let mixedData:(number|string)[] = [1, 'two', 3, 'four', 5];


//Problem 5

interface Car {
  make : string;
  model : string;
  year : number;
}

interface Driver { 
  name :  string; 
  licenseNumber : string;
}


const takesObjectCombined = (car : Car , driver : Driver) => {
  return {
    ...car,
    ...driver,
  }
}

const carInfo : Car = {
  make : "Mercedes" , 
  model : "20x3",
  year:  2002
}

const driverInfo = {
  name : "Modi",
  licenseNumber : "DHK612"
}

const combined = takesObjectCombined(carInfo,driverInfo);
// console.log(combined); 




// problem 6 
const getSumofNumbers = (value: unknown)=>{
  let sum = 0
  if(Array.isArray(value) && value.every(item=>typeof item === 'number')){
       for(const num of value){
          sum = sum+num;
       }
  }
  else{
      throw new Error("Not an Array of Number")
  }

  return sum
}

const totalSum = getSumofNumbers([1,2,3,4])
// console.log(totalSum)  



// problem 8
interface Product {
  name: string;
  price: number;
  quantity: number;
}

const getTotalCost = (shoppingCart : Product[]) =>{
  let totalCost = 0;
  for(let product of shoppingCart){
    totalCost += product.price * product.quantity;
  }
  return totalCost;
}

const shoppingCart: Product[] = [
  {
    name: "Apple",
    price : 20,
    quantity : 2
  },
  {
    name: "Apple2",
    price : 30,
    quantity : 2
  },
  {
    name : "Mangsho",
    price: 10,
    quantity : 1
  }
]

console.log(getTotalCost(shoppingCart));


