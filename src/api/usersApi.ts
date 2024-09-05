import IUser from "../types/IUser.ts";

export async function fetchAllUsers(): Promise<IUser[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch users.");
  }

  return resData;
}
