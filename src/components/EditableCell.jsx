import React, { useEffect, useState } from 'react';
const EditableCell = ({ value, onSave, onCancel, isEditing }) => {
    const [inputValue, setInputValue] = useState(value);
  
    const handleSave = () => {
      onSave(inputValue);
    };
  
    return (
      <div>
        {isEditing ? (
          <div className=' flex flex-wrap items-center justify-start space-y-2 md:space-y-0 md:space-x-2'>
          <input
            className='w-full md:w-auto border rounded-lg p-2'
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className='w-full border rounded-lg bg-green-500 text-white p-2  md:w-auto' onClick={handleSave}>
            Save
          </button>
          <button className='w-full border rounded-lg bg-red-600 text-white p-2  md:w-auto' onClick={onCancel}>
            Cancel
          </button>
        </div>
        
        ) : (
          value
        )}
      </div>
    );
  };
  export default EditableCell;