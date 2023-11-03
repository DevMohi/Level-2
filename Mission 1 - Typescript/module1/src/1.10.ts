{
    //Union types
    // type FrontendDeveloper = 'faki' | 'junior';
    // type BackendDeveloper = 'faki' | 'junior';

    // type Developer  = FrontendDeveloper | BackendDeveloper;

    // const newDeveloper : FrontendDeveloper  =  'junior';

    // type User = {
    //     name: string;
    //     email : string;
    //     gender : "male" | "female" ;
    //     blood : "O" | "A";
    // }

    // const user1 : User = { 
    //     name : "farhan",
    //     email : 'morphex',
    //     gender : 'male',
    //     blood : 'A',
    // }


    //Intersection 
    type FrontendDeveloper = {
        skills : string[];
        designation1 : 'Frontend Developer'
    }
    type BackendDeveloper = {
        skills : string[];
        designation2 : 'Backend Developer'
    }

    //Intersection is similar to and 
    type FullStack = FrontendDeveloper & BackendDeveloper;
    const fullStackDeveloper : FullStack = {
        skills : ['HTMl'],
        designation1 : "Frontend Developer",
        designation2 : "Backend Developer"
    }

}