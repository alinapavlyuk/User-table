import ColumnFilter from "./ColumnFilter.tsx";

interface ColumnHeaderProps {
  name: string;
}

export default function ColumnHeader({ name }: ColumnHeaderProps) {
  return (
    <th>
      <span>{name}</span>
      <ColumnFilter property={name.toLowerCase()} />
    </th>
  );
}
