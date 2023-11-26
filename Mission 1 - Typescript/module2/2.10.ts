{
  //Mapped Types
  const arrOfNum: number[] = [1, 4, 5];
  const arrOfStrings: string[] = arrOfNum.map((number) => number.toString());
  console.log(arrOfStrings);

  type Area = {
    height : number;
    width : number;
  }

  //Mapping with typescript 
  //Converting type 
  //Key = T["Width"] //lookup 
  type AreaString<T> = {
    [key in keyof T]:T[key]; 
  }
  //Lookup 
  type Height = Area["height"]; //lookup type
  const area1 : AreaString <{height: string; width: number}> = {
    height: "100",
    width: 20
  }

}
