import { useHistory, Link } from "react-router-dom";
import styled from 'styled-components';


const HeaderRightContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;

    div {
        display: flex;
        flex-wrap: nowrap;
        margin: 0;
        button {
            width: 100px;
        }
    }
    #left-side {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        margin-right: 1px;
    }
    #right-side {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
    nav {
        margin-right: 25px;
        display: flex;
        min-width: 200px;
        width: 10%;
        justify-content: space-between;

        a {
            text-decoration: none;
            color: ${(props) => props.theme.black};
            
        }
        .decor-nav {
            //background: red;
            height: 80px;
            width: 0px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-radius: 0;
            padding: 0px;
            transition: width 0.8s;

            :hover {
                border-bottom: ${(props) => props.theme.orangeLine};
                border-top: 3px solid rgba(0,0,0,0);
                width: 30px;
            }
        }
    }
    
`

const HeaderRight = () => {
    const history = useHistory()

    

    const handleClick = (e) => {
        switch (e.target.name) {
            case 'to-signin':
               history.push('/signin');
               break;
            case 'to-signup':
                history.push('/signup');
                break;
            default:
                break;
        }
    }
    //console.log(history.location.pathname)

    return(
    <HeaderRightContainer>
        <nav>
            <div className='decor-nav'><Link to='/'>Home</Link></div>
            <div className='decor-nav'><Link to='/search'>Search</Link></div>
            <div className='decor-nav'><Link to='/user'>Profile</Link></div>
        </nav>
        <div>
            <button 
                id='left-side'
                name='to-signup'
                onClick={handleClick}>
                    signup</button>
            <button 
                id='right-side'
                name='to-signin'
                onClick={handleClick}>
                    signin</button>
        </div>

    </HeaderRightContainer>
    )
}


export default HeaderRight;
