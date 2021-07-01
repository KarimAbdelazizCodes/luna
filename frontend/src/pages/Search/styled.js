import styled from "styled-components";
import {PageWrapper} from "../Login/styled";

export const Wrapper = styled(PageWrapper)`
  .container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: 100vh;

    .views {
      display: flex;
      justify-content: center;
      align-items: center;

      .view {
        padding: 20px;
        :hover {
          cursor: pointer;
        }
      }
    }

    // this is for the views (restaurant, user, review)
    .border-bottom {
      border-bottom: ${(props) => props.theme.orangeLine};
    }

    .search-bar{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 50px;
      border: ${(props) => props.theme.border};
      padding: 0 10px;

      .categories {
        background: none;
        border: none;
        outline: none;
      }

      form {
        display: flex;
        justify-content: flex-start;
        width: auto;
      }
    }
  }
`