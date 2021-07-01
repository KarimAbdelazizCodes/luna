import styled from "styled-components";

export const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  .top {
    display: flex;
    align-items: center;
    width: 100%;

    .top-right {
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
    .top-left{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`