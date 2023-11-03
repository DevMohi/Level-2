{



    //Type Alias Object

    type Student = {
        name : string;
        age : number; 
        gender : string;
        contact : string;
        
    }

    const student1: Student = {
        name : 'farhan',
        age : 50,
        gender : 'male',
        contact : '0122222',
    }
    const student2: Student = {
        name : 'Mir',
        age : 40,
        gender : 'male',
        contact : '11164161',
    }

    //Normal 
    type UserName = string;
    const userName : UserName = "Modu";


    //Function type alias 
    type Add = (a:number,b:number) => number;
    const add: Add = (a,b) => a+b;

}