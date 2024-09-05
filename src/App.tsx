import { useCallback, useEffect } from "react";
import "./App.css";
import UsersTable from "./components/UsersTable.tsx";
import { fetchAllUsers } from "./api/usersApi.ts";
import { useAppDispatch } from "./hooks";
import { setError, setIsLoading, setUsers } from "./store/usersSlice.ts";
import { AppDispatch } from "./store";
import IUser from "./types/IUser.ts";

function App() {
  const dispatch: AppDispatch = useAppDispatch();

  const changeLoadingStatus = useCallback(
    (value: boolean): void => {
      dispatch(setIsLoading(value));
    },
    [dispatch],
  );

  const changeErrorStatus = useCallback(
    (value: string): void => {
      dispatch(setError(value));
    },
    [dispatch],
  );

  useEffect((): void => {
    async function fetchUsers(): Promise<void> {
      changeLoadingStatus(true);
      try {
        const fetchedUsers: IUser[] = await fetchAllUsers();
        dispatch(setUsers(fetchedUsers));
      } catch (error: unknown) {
        if (error instanceof Error) {
          changeErrorStatus(error.message);
        } else {
          changeErrorStatus("Failed to load users.");
        }
      }
      changeLoadingStatus(false);
    }

    fetchUsers();
  }, [changeLoadingStatus, changeErrorStatus, dispatch]);

  return (
    <div className="container">
      <UsersTable />
    </div>
  );
}

export default App;
