{
    //Generic type


    // type GenericArray = Array<boolean>; 
    type GenericArray<T> = Array<T>;

    // const rollNumbers : number[] = [3,6,8]; 
    // const rollNumbers : Array<number> = [3,6,8]; 
    const rollNumbers : GenericArray<number> = [3,6,8];


    // const mentors : string[] = ['MR X', 'MR Y']; 
    // const mentors : Array<string> = ['MR X', 'MR Y']; 
    const mentors : GenericArray<string> = ['MR X', 'MR Y'];

    // const booleanArray : boolean[] = [true, false]; 
    // const booleanArray : Array<boolean> = [true, false]; 
    // const booleanArray : GenericArray = [true, false];  
    const booleanArray : GenericArray<boolean> = [true, false];  



    type User = {
        name: string,
        age : number;
    }

    const user: GenericArray<User> = [
        {
            name : 'Mezba',
            age : 100
        },
        {
            name : 'Mezba',
            age : 110
        },
    ]

    //Generic Tuple
    type GenericTuple<X,Y> = [X,Y]; 
    const Manush : GenericTuple <string,string> = ['Mr X', ' Mr Y'];
    const userWithId : GenericTuple<number, {name:string, email:string}> = [1234, {name: 'modi', email: 'modi@chapri.com'}]

    const add = (x: number, y:number) => x + y;
    add(30,20);

    
    //
}