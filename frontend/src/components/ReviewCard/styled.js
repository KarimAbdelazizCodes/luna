import styled from "styled-components";
import {Card} from "../../templates/Card";

export const Wrapper = styled(Card)`
  
  .name{
    font-weight: 600;
    color: darkorange;
  }
  
  .smaller-font{
    font-size: 13px;
  }

  .review-top {
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid lightgray;

    .name-reviews {
      display: flex;
      flex-direction: column;
      padding: 10px 0 0 10px;
    }

    img {
      width: 50px;
      height: 50px;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    margin: 10px;
    
    .review-content {
      padding: 5px 0;
      font-size: 13px;
    }
  }
  
  .like-comment {
    background: gray;
    height: 35px;
    border-radius: 50px;
    display: flex;
    justify-content: space-around;
    
    div {
      border-right: 1px solid white;
      width: 100%;
      border-radius: 0;
    }
    
    button {
      text-transform: none;
      height: 100%;
      width: 100%;
      background: none;
      :active {
        transform: translateY(0.5px);
      }
      :hover {
        cursor: pointer;
      }
    }
  }
  
  .latest-comments {
    display: flex;
    flex-direction: column;
  }
`