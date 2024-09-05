import { useAppDispatch, useAppSelector } from "../hooks";
import { setFilter } from "../store/usersSlice.ts";
import { AppDispatch, RootState } from "../store";
import * as React from "react";
import IFilters from "../types/IFilters.ts";

interface ColumnFilterProps {
  property: string;
}

export default function ColumnFilter({ property }: ColumnFilterProps) {
  const filterValue = useAppSelector(
    (state: RootState) => state.filters[property as keyof IFilters],
  );
  const dispatch: AppDispatch = useAppDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setFilter({ [property]: event.currentTarget.value }));
  };

  return (
    <input
      type="text"
      name={property}
      value={filterValue}
      onChange={handleChange}
    />
  );
}
