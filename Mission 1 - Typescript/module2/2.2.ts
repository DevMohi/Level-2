{
    //Interface 

    //Normal type declaring 
    type User1 = {
        name: string;
        age: number;
    }


    //With interface
    interface User2{
        name: string;
        age: number;
    }

    // Intersection with type 
    type UserWithRole = User1 & {role : string}

    // Intersection with interface
    interface UserWithRole2 extends User2{
        role: string; 
    }

    const user1 : UserWithRole = {
        name: "modi",
        age: 12,
        role: "manager",
    }
    const user2 : UserWithRole2 = {
        name: "modi",
        age: 12,
        role: "manager",
    }


    //array 
    type Roll1 = number [];
    const rollNumber1 : Roll1 = [1,2,3];

    // interface 
    interface Roll2 {
        [index : number ] : number,
    }

    type Add = (num1 : number , num2: number) => number;
    
    interface Add2{
        (num1 : number , num2: number) : number;
    }
    const add: Add = (num1, num2) => num1 + num2;

}