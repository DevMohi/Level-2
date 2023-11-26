{
  //Asynchronous typescript

  type Todo = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  };

  const getTodo = async (): Promise<Todo> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    return data;
  };
  getTodo();

  type Something = { something: string };

  //Promise
  const createPromise = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
      const data: Something = { something: "something" };
      if (data) {
        resolve(data);
      } else {
        reject(data);
      }
    });
  };

  //Calling create promise function
  const showData = async (): Promise<Something> => {
    const data = await createPromise();
    return data;
  };

  showData();
}
