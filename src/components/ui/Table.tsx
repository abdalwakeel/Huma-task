import "./Table.css";

interface TableProps {
  columns: string[];
  data: Record<string, string | number>[];
  striped?: boolean;
}

const Table = ({ columns, data, striped = false }: TableProps) => {
  return (
    <table className={`table ${striped ? "table-striped" : ""}`}>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col) => (
              <td key={col}>{row[col]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;