import { Input, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = ({ onSearch, value, ...props }) => {
  const onEnter = (e) => {
    if (e.keyCode === 13) {
      onSearch(e);
    }
  };
  return (
    <Input
      {...props}
      onKeyUp={onEnter}
      id="SearchBar"
      placeholder="Search"
      endAdornment={
        <InputAdornment position="end">
          <Search />
        </InputAdornment>
      }
    />
  );
};
export default SearchBar;
