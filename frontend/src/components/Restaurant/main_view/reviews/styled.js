import styled from "styled-components";

export const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  padding: 10px;
  background: white;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid lightgray;

    .top-left {
      display: flex;
      justify-content: flex-start;

      .name{
        font-weight: 600;
        color: darkorange;
      }

      .smaller-font{
        font-size: 13px;
      }

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
    .top-right{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 60%;
      
      .date-created {
        font-size: 12px;
      }
    }
  }

  .bottom {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    
    .view-comments, .hide-comments {
      color: darkorange;
      font-weight: 500;
      :hover {
        cursor: pointer;
      }
    }

    .like-comment {
      background: gray;
      height: 35px;
      width: 50%;
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
  }
`