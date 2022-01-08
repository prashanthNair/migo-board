import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const CategoryInput: React.FC = () => {
  const categories = [
    'category one',
    'category two',
    'category three',
    'category four',
    'category five',
  ];
  const [category, setCategory] = React.useState('category one');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  };

  return (
    <TextField
      style={{ width: '100%' }}
      size="small"
      id="outlined-select-category"
      select
      label="Category"
      value={category}
      onChange={handleChange}
    >
      {categories.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default CategoryInput;
