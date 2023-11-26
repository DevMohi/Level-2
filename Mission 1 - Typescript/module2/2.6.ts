{
    //Constraints = enforcing a rule
    const createArray = (param:string) : string[] => {
        return [param]
    }

    //Create Array with generic
    const createArrayWithGeneric = <T>(param: T) : T[] => {
        return [param]
    }

    const res1 = createArray('Bangladesh');
    const resGeneric = createArrayWithGeneric<boolean>(true);

    type User = {id:number , name: string}
    const resGeneric2 = createArrayWithGeneric<User>({id:333, name:'Mr.X'});



    const createArrayWithTuple = <T,Q>(param1: T, param2:Q) : [T,Q] => {
        return [param1,param2]
    }

    const res3 = createArrayWithTuple('Bangladesh', 222);

    // e.g Constraints is used to make sure you want to include them 
    const addCourse = <T extends {id: number;
        name: string;
        email: string}>(student : T) =>{
        const course = 'Next level web';
        return {
            ...student,
            course
        }
    }

    const student1 = addCourse<{
        id: number;
        name: string;
        email: string;
        devType: string
    }>({id: 222, name: 'MR X', email : 'x@gmail.com', devType: 'second'})
    const student2 = addCourse({id : 333 , name: 'MR Y', email : 'y@gmail.com', devType: 'first', hasWatch : 'Apple'})
    const student3 = addCourse({id : 444 , name: 'MR #' , email: 'a@gmila.com' ,emni: "emni" });
}