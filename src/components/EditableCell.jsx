import React, { useEffect, useState } from 'react';
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
  export default EditableCell;