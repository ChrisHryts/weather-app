import React from 'react';
import { TextField, Button, Box } from '@mui/material';
import { boxInputButtonStyles, inputStyles, buttonStyles } from '../styles/styles';

const Search = ({ city, setCity, handleSearch, setError }) => {
  return (
    <Box sx={boxInputButtonStyles}>
      <TextField
        label='Enter city'
        variant='outlined'
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
          setError('');
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
        sx={inputStyles}
      />

      <Button
        variant='contained'
        color='primary'
        onClick={handleSearch}
        sx={buttonStyles}
      >
        Get Weather
      </Button>
    </Box>
  );
};

export default Search;
