{
  //Abstraction : 1 -> Interface 2-> Abstract

  // interface Vehicle1 {
  //     name: string;
  //     model: string;
  // }
  // const vehicle1: Vehicle1 = {
  //     name: 'Toyota',
  //     model:"Corolla "
  // }

  //idea
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  //real implementation
  class Car implements Vehicle1 {
    startEngine(): void {
      console.log(`Starting the engine`);
    }
    stopEngine(): void {
      console.log("`Stopping");
    }
    move(): void {
      console.log(`Moving car`);
    }
    test() {
      console.log("Testing");
    }
  }

  const toyotaCar = new Car();
  toyotaCar.startEngine();

  //Abstract Class - follow korte parba but create korte parbana from abstract class
  //idea
  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
  }

  class ToyotaCar extends Car2 {
    startEngine(): void {
      console.log(`Tyoyota Starting`);
    }
    stopEngine(): void {
      console.log(`Tyoyota Stopping`);
    }
    move(): void {
      console.log(`Tyoyota Moving`);
    }
  }
}
