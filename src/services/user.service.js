export async function UsersList() {
  let res = await fetch('https://jsonplaceholder.typicode.com/users');
  let json = await res.json();
  return json;
}