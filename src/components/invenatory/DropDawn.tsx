import React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const DropDawn: React.FC = () => {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const names = [
    'Exclusive Product',
    'Combo',
    'Vouher',
    'Inactive',
  ];

  function getStyles(name: string, productName: string[], theme: Theme) {
    return {
      fontWeight:
      productName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
    };
  }
  const theme = useTheme();
  const [productName, setProductName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof productName>) => {
    const {
      target: { value },
    } = event;
    setProductName(
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  return (
    <FormControl sx={{ m: 1, width: 200 }}>
      <InputLabel id="demo-multiple-name-label">Exclusive</InputLabel>
      <Select
        size="small"
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        multiple
        value={productName}
        onChange={handleChange}
        input={<OutlinedInput label="Name" />}
        MenuProps={MenuProps}
      >
        {names.map((name) => (
          <MenuItem
            key={name}
            value={name}
            style={getStyles(name, productName, theme)}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropDawn;
