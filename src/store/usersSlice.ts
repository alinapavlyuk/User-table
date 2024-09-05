import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import IUser from "../types/IUser.ts";
import IFilters from "../types/IFilters.ts";

interface UsersState {
  users: {
    data: IUser[];
    isLoading: boolean;
    error:
      | {
          message: string;
        }
      | undefined;
  };
  filters: IFilters;
}

const initialState: UsersState = {
  users: {
    data: [],
    isLoading: false,
    error: undefined,
  },
  filters: {
    name: "",
    username: "",
    email: "",
    phone: "",
  },
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<IUser[]>): void => {
      state.users.data = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>): void => {
      state.users.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string>): void => {
      state.users.error = { message: action.payload };
    },
    setFilter: (
      state,
      action: PayloadAction<{ [key: string]: string }>,
    ): void => {
      const [key, value] = Object.entries(action.payload)[0];
      state.filters[key] = value;
    },
  },
});

export const { setUsers, setIsLoading, setError, setFilter } =
  usersSlice.actions;
export default usersSlice.reducer;
