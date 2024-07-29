import styled from "styled-components";
import TextField from "@mui/material/TextField";

export const StyledTextField = styled(TextField)`
  margin: 20px 30px;
  width: 15%;
  background-color: #333;
  border-radius: 4px;
  & .MuiInputBase-input {
    color: white;
    padding: 10px;
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
  & .MuiInputLabel-outlined {
    color: white;
    top: -6px;
    left: 14px;
  }
`;
