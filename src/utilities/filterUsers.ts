import IUser from "../types/IUser.ts";
import IFilters from "../types/IFilters.ts";

export function filterUsers(users: IUser[], filters: IFilters) {
  return users.filter((user: IUser) =>
    Object.entries(filters).every(([key, value]): boolean => {
      if (value === "") return true;

      const userValue = user[key as keyof IUser];

      const normalizedUserValue =
        typeof userValue === "number"
          ? userValue.toString().toLowerCase().replace(/-/g, "")
          : (userValue as string).toLowerCase().replace(/-/g, "");

      const normalizedFilterValue: string = value
        .toLowerCase()
        .replace(/-/g, "");

      return normalizedUserValue.startsWith(normalizedFilterValue);
    }),
  );
}
