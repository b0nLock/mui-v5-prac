import { TextField } from "@mui/material";

const Search = (props) => {
    const { onChange, value } = props;

    return <TextField 
    type='search' value={value} label='Search' variant="standard" fullWidth sx={{mb: "1.5rem"}}
    onChange={onChange} />;
};

export default Search;