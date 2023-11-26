{
    //Utility types
    //Pick
    type Person = {
        name: string;
        age: number;
        email?:string;
        contactNo:string;
    }

    type Name = Pick<Person,"name">
    type NameAge = Pick<Person,"name" | "age">

    //Omit
    type ContactInfo = Omit<Person, "name"|"age">

    //Require = makes all the property required
    type PersonRequire = Required<Person>

    //Require = makes all the property optional
    type PersonParial = Partial<Person>;

    //readonly
    const person1: Person = {
        name : "Mr X",
        age : 30,
        contactNo: "ctg"
    }
    type PersonReadonly = Readonly<Person> // will not allow you to make changes 
    // person1.name = "Mt.xyz"

    //record 
    type MyObj = Record<string,string>;
    const obj1: MyObj = {
        a: "aa",
        b: "bb",
        c: "cc"
    }

    const EmptyObj : Record<string,unknown> = {}
    
 
     
}