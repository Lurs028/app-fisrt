
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';





 function FullWidthTextField(type, text,name,placeholder,search,value) {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField  value={search} />
    </Box>
  );
}

export default FullWidthTextField