import React, { useCallback, useState } from 'react';
import { styled } from '@mui/material/styles';

export interface SearchBarProps {
    placeholder?: string;
    onSearch?: (q: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
  const { placeholder, onSearch } = props;

  const [val, setVal] = useState<string>('');

  const SearchInputField = styled('input')(() => ({
    background: '#ebebeb',
    border: 'none',
    borderRadius: '20px',
    padding: '15px 25px',
  }));

  const handleKeyDown = useCallback((ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === 'Enter') {
      if (onSearch) {
        onSearch(val);
        setVal('');
      }
    }
  }, []);

  const handleChange = useCallback((ev: React.ChangeEvent<HTMLInputElement>) => {
    setVal(ev.target.value);
  }, []);

  return (
    <SearchInputField onChange={handleChange} value={val} onKeyDown={handleKeyDown} placeholder={placeholder} />
  );
};
export default SearchBar;
