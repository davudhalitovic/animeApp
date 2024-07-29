import styled from "styled-components";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

export const StyledFormControl = styled(FormControl)`
  width: 20%;
  margin-right: 50px;
  background-color: #333;
  border-radius: 4px;
  color: white;
`;

export const StyledSelect = styled(Select)`
  .MuiSelect-select {
    color: white;
    padding: 10px;
    border-color: white;
  }
`;

export const StyledInputLabel = styled(InputLabel)`
  top: -6px;
  left: 14px;
  color: white;
  border-color: white;

  &.Mui-focused {
    top: -6px;
    border-color: white;
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  background-color: #333;
  color: white;
  &:hover {
    background-color: #555;
  }
`;
