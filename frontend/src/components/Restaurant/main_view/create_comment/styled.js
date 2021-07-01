import styled from "styled-components"

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  
  .upper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
    
    form {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-right: 50px;
      
      input {
        width: 100%;
        margin-right: 10px;
        border: 1px solid lightgray;
      }
    }
  }
  
  .comment-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
    border-bottom: 1px solid lightgray;
    
    .time-stamp {
        font-size: 12px;
      }
    
    .comment-left {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      
      .commenter{
        font-weight: 700;
        font-size: 15px;
        color: darkorange;
        margin-bottom: 5px;
      }
      .comment-text {
        font-size: 14px;
      }
    }
  }
`