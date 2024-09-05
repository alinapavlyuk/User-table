import ColumnHeader from "./ColumnHeader.tsx";
import { useAppSelector } from "../hooks";
import { filterUsers } from "../utilities/filterUsers.ts";
import { RootState } from "../store";
import User from "./User.tsx";

export default function UsersTable() {
  const users = useAppSelector((state: RootState) => state.users.data);
  const filters = useAppSelector((state: RootState) => state.filters);
  const filteredUsers = filterUsers(users, filters);

  const isLoading = useAppSelector((state: RootState) => state.users.isLoading);
  const error = useAppSelector((state: RootState) => state.users.error);

  return (
    <table>
      <thead>
        <tr>
          <ColumnHeader name="Name" />
          <ColumnHeader name="Username" />
          <ColumnHeader name="Email" />
          <ColumnHeader name="Phone" />
        </tr>
      </thead>
      <tbody>
        {isLoading && (
          <tr>
            <td>Fetching users...</td>
          </tr>
        )}
        {error && (
          <tr>
            <td>{error.message}</td>
          </tr>
        )}
        {!isLoading &&
          !error &&
          filteredUsers.map((user) => <User key={user.id} user={user} />)}
      </tbody>
    </table>
  );
}
