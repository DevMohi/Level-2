{
    //Instance of Guard
    class Animal {
        name: string;
        species: string;

        constructor(name:string , species: string){
            this.name = name;
            this.species = species;
        }
        makeSound(){
            console.log(" I am making Sound")
        }
    }


    class Dog extends Animal {
        constructor(name:string , species: string){
            super(name, species);
        }

        makeBark(){
            console.log("I am Barking")
        }
    }
    class Cat extends Animal {
        constructor(name:string , species: string){
            super(name, species);
        }

        makeBark(){
            console.log("I am Meowing")
        }
    }
    //smart way to tah handle korar jne chaile amra function bebohar korte pari , aita animal is dog aita korte hobe naile boolean return korbe ar bhul dekabe function e
    const isDog = (animal : Animal) : animal is Dog =>{
        return animal instanceof Dog;
    }
    const isCat = (animal : Animal) : animal is Cat =>{
        return animal instanceof Cat;
    }


    const getAnimal = (animal : Animal) =>{
        //Property of dog
        //One way 
        if( isDog(animal)){
            animal.makeBark();
        }
        //Another way 
        else if( animal instanceof Cat){
            animal.makeBark();
        }
        else{
            animal.makeSound();
        }
    }

    //Instance
    const dog = new Dog("Dog bHai", "dog");
    const cat = new Cat("Cat bHai", "cat");

    getAnimal(dog);
    //
}