{
    //conditional Type = Any type that is dependent on another type

    type a1 = null;
    type b1 = undefined;

    type x= a1 extends null? true: false; //conditional type
    type y= a1 extends null? true: b1 extends undefined ? undefined : any; //conditional type


}