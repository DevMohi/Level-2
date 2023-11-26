{
    //OOp -> Inheritance

    // Parent class 
    class Parent{
        constructor (public name: string, public age: number , public address: string){
        }
        getSleep(numOfHours: number){
            console.log(`${this.name} will sleep for ${numOfHours}`);
        }
    }
    class Student extends Parent {
        //Initialize and declaring
        constructor (name: string, age: number , address: string){
            super(name,age, address);
        }
 
    }

    const student1 = new Student("Mr Student",20, "Uganda");

    
    class Teacher extends Parent {

        //Initialize and declaring
        constructor (name: string, age: number , address: string, public designation: string){
            super(name,age, address);
        }
        takeClass(numOfClass: number){
            console.log(`${this.name} will sleep for ${numOfClass}`); 
        }
    }

    const teacher1 = new Teacher("Mr Teacher",30, "SUganda" ,"Professor");
    
}