import IUser from "../types/IUser.ts";

interface UserProps {
  user: IUser;
}

export default function User({ user }: UserProps) {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
    </tr>
  );
}
