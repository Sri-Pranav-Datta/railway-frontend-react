import React, { useState, useMemo, useEffect } from 'react';
import { useTable } from 'react-table';
import './tableStyles.css';
import initialData from './initialData.json';

const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateMyData,
}) => {
  const [value, setValue] = useState(initialValue);
  
  const onBlur = (e) => {
    updateMyData(index, id, e.currentTarget.textContent);
  };

  const getColor = (value) => {
    switch (value) {
      case 'tex':
        return 'lightgreen';
      case 'csm':
        return 'lightblue';
      case 'unimat':
        return 'lightcoral';
      default:
        return 'white';
    }
  };
  
  return (
    <div
      contentEditable
      suppressContentEditableWarning
      onBlur={onBlur}
      onMouseLeave ={(e) => setValue(e.currentTarget.textContent)}
      style={{
        backgroundColor: getColor(value),
        padding: '8px',
        borderRadius: '4px',
        minHeight: '30px',
      }}
    >
      {value}
    </div>
  );
};

const defaultColumn = {
  Cell: EditableCell,
};

const Table = ({ columns, data, updateMyData }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
    defaultColumn,
    updateMyData,
  });

  return (
    <div className="table-container">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [data, setData] = useState(initialData);

  const updateMyData = (rowIndex, columnId, value) => {
    setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...row,
            [columnId]: value,
          };
        }
        return row;
      })
    );
  };

  const handleSubmit = () => {
    const fileData = JSON.stringify(data, null, 2);
    const blob = new Blob([fileData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'outputData.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const columns = useMemo(
    () => [
      {
        Header: 'Station',
        accessor: 'station',
        Cell: ({ value }) => <span>{value}</span>, // Make the Station column non-editable
      },
      ...Array.from({ length: 24 }, (_, i) => [
        {
          Header: `${i.toString().padStart(2, '0')}:00-${i
            .toString()
            .padStart(2, '0')}:30`,
          accessor: `${i.toString().padStart(2, '0')}:00`,
        },
        {
          Header: `${i.toString().padStart(2, '0')}:30-${(i + 1) % 24 === 0
            ? '00'
            : (i + 1).toString().padStart(2, '0')}:00`,
          accessor: `${i.toString().padStart(2, '0')}:30`,
        },
      ]).flat(),
    ],
    []
  );

  return (
    <div>
      <Table columns={columns} data={data} updateMyData={updateMyData} />
      <button onClick={handleSubmit} className="submit-button">Submit</button>
    </div>
  );
};

export default App;
