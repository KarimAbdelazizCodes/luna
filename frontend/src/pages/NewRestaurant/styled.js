import styled from "styled-components";
import {PageWrapper} from "../Login/styled";

export const Wrapper = styled(PageWrapper)` 
  .container {
    width: 80%;
    
    form {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(4, 1fr);
      column-gap: 10vw;
      row-gap: 5vh;
    }
    input {
      border: lightgray 1px solid;
      padding: 10px 30px;
      background: white;
      width: 100%;
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
