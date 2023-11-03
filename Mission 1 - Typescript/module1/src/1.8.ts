  //Destructuring
{
    const user = { 
        id : 345,
        name : {
            firstName : 'Mezba',
            middle : 'Mezba',
        },
        contact : "012222222",
      }

    const {contact , name :{middle : midName} } = user;

}


//Array destructuring

const myFrnd = ['Modu', 'Chod', 'shakib', 'monica', 'dadu'];

const [,,best,...rest] = myFrnd;


console.log(best,rest);
