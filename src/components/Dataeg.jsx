import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import EditableCell from './EditableCell';

const Dataeg = () => {

    // Sample data
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('Name');

    useEffect(()=>{
      const fetchdata= async () => { 
        try {
          const res= await fetch("https://json-placeholder.mock.beeceptor.com/users");
          if(!res.ok)
            throw new Error("Error in Your api");
        const result= await res.json();
        setData(result);
        setFilteredData(result);
      }
      catch(error)
      {
        console.log(error.message);
      }
    }
    fetchdata();
    },[])

    useEffect(() => {
      const lowerSearch = search.toLowerCase();
      const filtered = data.filter(row => {
        if (filterType === 'Name') {
          return row.name.toLowerCase().includes(lowerSearch);
        } else if (filterType === 'Age') {
          return row.zip && row.zip.toString().includes(lowerSearch);
        }
        return true;
      });
      setFilteredData(filtered);
    }, [search, filterType, data]);

    // State to track which row is being edited
    const [editingRow, setEditingRow] = useState(null);
  
    // Handle editing
    const handleEdit = (rowId) => {
      setEditingRow(rowId);
    };
    const handleDelete =(rowId)=>{
      setData((prev)=> prev.filter((row)=> row.id==rowId ?false : true));
    }
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
        name: 'Zip Code',
        selector: row => row.zip,
        sortable:true,
      },
      {
        name: 'Actions',
        cell: (row) => (
          <div className='w-full flex flex-wrap'>
          <button className={`border ${row.id===editingRow ? 'bg-red-400' :'bg-blue-500' } border-solid mx-1 p-1 w-full md:w-1/3 font-semibold`} onClick={() => handleEdit(row.id)}>
            {row.id === editingRow ? 'Editing' : 'Edit'}
          </button>
          <button className='max-h-10 overflow-hidden
           w-full border border-solid md:w-1/3 font-semibold p-1 mx-1 bg-red-600' onClick={()=> handleDelete(row.id)} > Delete 
          </button>
          </div>
        ),
      }
    ];
  
    return ( 
      <>
      <div className='bg-orange-200 px-8 pt-4 flex flex-wrap justify-between items-baseline '>
      {/* Filter type dropdown */}
      <select
        className="border bg-orange-50 rounded-lg p-2 mb-4 mr-4"
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
      >
        <option value="Name">Name</option>
        <option value="Age">Zip</option>
      </select>

      {/* Search bar */}
      <input
        type="text"
        placeholder={`Search by ${filterType.toLowerCase()}...`}
        className="border bg-orange-100 rounded-lg p-2 mb-4 w-1/3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      </div>

       {data && (<DataTable
        columns={columns}
        data={filteredData}
        pagination
        responsive
        highlightOnHover
        customStyles={{
          headCells: {
            style: {
              fontSize: '16px',
              fontWeight: 'bold',
              backgroundColor:"coral"
            },
          },
          rows: {
            style: {
              minHeight: '72px', // Override the row height
              backgroundColor:'thistle',
              fontSize:'20px'
            },
          },
        }}
      />) }
        </>
    );
  };
  
  export default Dataeg;