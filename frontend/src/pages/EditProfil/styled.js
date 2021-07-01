import styled from "styled-components";
import {PageWrapper} from "../Login/styled";

export const Wrapper = styled(PageWrapper)` 
  .container {
    width: 50%;
    
    form {

    }
    input {
      border: lightgray 1px solid;
      padding: 10px 30px;
      background: white;
      width: 100%;
      margin-bottom: 20px;
    }

    select {
      outline: none;
      border: lightgray 1px solid;
      padding: 10px 30px;
      color: black;
      width: 100%;
    }
    
    h4 {
      margin-bottom: 10px;
    }
    
    h5 {
      color: grey;
      margin-bottom: 10px;
    }
    
    p {
      color: red;
      font-size: small;
      margin: 0;
      padding: 0;
    }

  }
`
