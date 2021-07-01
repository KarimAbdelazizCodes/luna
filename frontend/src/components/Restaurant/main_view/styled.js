import styled from "styled-components";

export const Upper = styled.div`
  width: 100%;
  height: 300px;
  background: url(${props => props.avatar});
  background-size: cover;
  margin-bottom: 15px;
  
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 150px;
    width: 100%;
    padding: 30px 100px;
    background: rgba(0,0,0,.4);
    color: white;
    
    .restaurant-title {
      font-weight: 300;
      font-size: 30px;
    }
    
    .ratings {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 200px;
    }
  }
`

export const Lower = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  
  .right {
    display: flex;
    flex-direction: column;
    width: 35%;
    
    .hours, .price, .write-reivew {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 30px;
      
      img {
        width: 25px;
        margin-right: 15px;
      }
      
      button {
        margin-right: 20px;
      }
    }
    
  }
  
  .left {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 65%;
    
    .filter {
      display: flex;
      width: 70%;
      margin-bottom: 20px;
      
      input {
        background: white;
        width: 100%;
        margin-right: 15px;
      }
    }
    .reviews {
      width: 70%;
      display: flex;
      flex-direction: column;
    }
  }
`