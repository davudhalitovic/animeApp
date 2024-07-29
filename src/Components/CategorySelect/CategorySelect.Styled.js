import styled from "styled-components";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

export const StyledFormControl = styled(FormControl)`
  margin: 20px 30px;
  width: 15%;
  background-color: #333;
  border-radius: 4px;
  & .MuiInputBase-root {
    color: white;
  }
`;

export const StyledSelect = styled(Select)`
  & .MuiSelect-select {
    padding: 10px;
    color: white;
    background-color: #333;
    border-radius: 4px;
    border-color: white;
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: white;
    }
    &:hover fieldset {
      border-color: #00ff00;
    }
    &.Mui-focused fieldset {
      border-color: #00ff00;
    }
  }
`;

export const StyledInputLabel = styled(InputLabel)`
  color: white;
  top: -6px;
  left: 14px;
  &.Mui-focused {
    color: white;
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  background-color: #333;
  color: white;
  &:hover {
    background-color: #555;
  }
`;
