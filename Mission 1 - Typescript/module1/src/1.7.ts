{

    //Spread operator
    const bros1 : string[] = ['Masud', 'Rakib'];
    const bros2 : string[] = ['Masud2', 'Rakib2'];


    bros1.push(...bros2);
    console.log(bros1);

    const mentors1 = { 
        typescript : 'mezba ',
        redux : 'Mir',
        dbms : 'Mizan'
    }

    const mentors2 = { 
        prisma : 'mezba ',
        next : 'tonmoy',
    }
    
    //shob aikane chole ashbe 
    const mentorList = {
        ...mentors1,
        ...mentors2
    }
    console.log(mentorList);


    //rest Operator
    const friends = (frnd1:string, frnd2:string) => {
        console.log( `Hi ${frnd1} ${frnd2}`);
    }

    friends('Abul','Bab'); //Example you want to add more friends 

    //This is how you do it with rest operator 

    const friends2 = (...friends: string[]) => {
        friends.forEach((friend:string) => console.log(`Hi ${friend}`))
    }

    //More friends added
    friends2('Abul','Bab','Shakib'); //Example you want to add more friends 
    console.log(friends2);




  







}