{
    //Generic Contraint with keyof operator

    type Vehicle = {
        bike:string;
        car: string;
        ship: string;
    }
    type Owner = "bike" | "car" | "ship" ; //manually
    type Owner2 = keyof Vehicle;

    const getProperty = <X, Y extends keyof X>  (obj: X, key: Y) => {
        return obj[key];
    }

    const user = {
        name: "Mr Persian",
        age: 26 ,
        address: 'ctg'
    }
    
    const car = {
        model: "Toyota 100",
        year : 2000
    }


    const result = getProperty(user, 'name');



    // const person1 : Owner2 = "ship" 

    

}