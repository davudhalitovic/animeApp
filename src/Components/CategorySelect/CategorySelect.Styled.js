import styled from "styled-components";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

export const StyledFormControl = styled(FormControl)`
  margin: 20px 0;
  width: 30%;
  background-color: #333;
  border-radius: 4px;
  color: white;
`;

export const StyledSelect = styled(Select)`
  .MuiSelect-select {
    padding: 10px;
  }
`;

export const StyledInputLabel = styled(InputLabel)`
  top: -6px;
  left: 14px;
  &.Mui-focused {
    top: -6px;
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  background-color: #333 !important;
  color: white;
  &:hover {
    background-color: #555 !important;
  }
`;
