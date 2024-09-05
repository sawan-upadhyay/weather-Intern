import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

// EditableCell component
const EditableCell = ({ value, onSave, onCancel, isEditing }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleSave = () => {
    onSave(inputValue);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className='border bg-green-500 border-solid mx-1 p-1 w-16 font-semibold' onClick={handleSave}>Save</button>
          <button className='border bg-red-600 border-solid p-1 w-16 font-semibold' onClick={onCancel}>Cancel</button>
        </>
      ) : (
        value
      )}
    </div>
  );
};

const Dataeg = () => {
    // Sample data
    const [data, setData] = useState([]);
    useEffect(()=>{
      const fetchdata= async () => { 
        try {
          const res= await fetch("https://json-placeholder.mock.beeceptor.com/users");
          if(!res.ok)
            throw new Error("Error in Your api");
        const result= await res.json();
        setData(result);
      }
      catch(error)
      {
        console.log(error.message);
      }
    }
    fetchdata();
    },[])

    // State to track which row is being edited
    const [editingRow, setEditingRow] = useState(null);
  
    // Handle editing
    const handleEdit = (rowId) => {
      setEditingRow(rowId);
    };
  
    // Save edited data
    const handleSave = (rowId, newValue) => {
      setData((prevData) =>
        prevData.map((row) =>
          row.id === rowId ? { ...row, name: newValue } : row
        )
      );
      setEditingRow(null);
    };
  
    // Cancel editing
    const handleCancel = () => {
      setEditingRow(null);
    };
  
    // Define columns
    const columns = [
      {
        name: 'ID',
        selector: row => row.id,
      },
      {
        name: 'Name',
        cell: (row) => (
          <EditableCell
            value={row.name}
            onSave={(newValue) => handleSave(row.id, newValue)}
            onCancel={handleCancel}
            isEditing={row.id === editingRow}
          />
        ),
      },
      {
        name: 'Age',
        selector: row => row.zip,
        sortable:true,
      },
      {
        name: 'Actions',
        cell: (row) => (
          <button className={`border ${row.id===editingRow ? 'bg-red-400' :'bg-blue-500' } border-solid mx-1 p-1 w-16 font-semibold`} onClick={() => handleEdit(row.id)}>
            {row.id === editingRow ? 'Editing' : 'Edit'}
          </button>
        ),
      }
    ];
  
    return ( 
       data && (<><DataTable
        columns={columns}
        data={data}
        pagination
        highlightOnHover
      /> </>) 
    );
  };
  
  export default Dataeg;