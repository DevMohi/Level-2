{
    //oop -> class

    class Animal {

        constructor(public name: string , public species: string, public sound: string) {
        }
        //Arrow function e this kaaj korena
        makeSound(){
            console.log(`The ${this.name} says ${this.sound}`);
        }
    }

    //Creating an Instance 
    const dog = new Animal("Shepherd", "dog", 'Ghew');
    const cat = new Animal("Persian", "Cat", "Mew");
    dog.makeSound();
}