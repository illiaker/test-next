export const getUsers = async (): Promise<User[]>  => {
  return (await fetch("https://jsonplaceholder.typicode.com/users")).json();
};

export const getUser = async (id: string): Promise<User> => {
  return (await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)).json();
};


export type User = {
    id: string,
    name: string,
    username: string
}
