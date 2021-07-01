import styled from "styled-components";

export const Upper = styled.div`
  width: 100%;
  height: 300px;
  background: url(${props => props.avatar});
  background-size: cover;
  
  .info {
    display: flex;
    flex-direction: column;
    height: 150px;
    width: 100%;
    padding: 30px 100px;
    background: rgba(0,0,0,.4);
    color: white;
    
    .restaurant-title {
      font-weight: 300;
      font-size: 30px;
    }
  }
`