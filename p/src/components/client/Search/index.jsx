import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import "./style.css"

export default function FreeSolo() {
  return (
    <div className="StackBox">
        <Stack className='Stack' spacing={2} sx={{ width: 1200 }}>
        <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={top100Films.map((option) => option.title)}
            renderInput={(params) => (
            <TextField
                {...params}
                label="Search input"
                InputProps={{
                ...params.InputProps,
                type: 'search',
                
                }}
            />
            )}
        />
        </Stack>
    </div>
  );
}

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 }
];