import styled from "styled-components";
import buffet from '../../assets/homepage.jpg'
import Input from '../../components/Input';

export const SearchInput = styled(Input)`
  height: 100px;
`

export const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: url('${buffet}');
  background-size: cover;
  height: 300px;
  
  .search-container {
    display: flex;
    justify-content: center;
    align-items: center;
    
    input {
      width: 500px;
      font-size: 15px;
    }
    
    button {
      text-transform: none;
      width: 200px;
      height: 60px;
      margin-left: 25px;
      font-size: 20px;
      border-radius: 45px;
    }
  }
`

export const Featured = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  .restaurants {
    display: flex;
    flex-wrap: wrap;
    margin: 50px 138px 200px 138px;
  }
`