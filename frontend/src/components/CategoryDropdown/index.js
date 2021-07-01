import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import {search} from "../../store/actions/home_search";
import {useDispatch, useSelector} from "react-redux";
import { useEffect } from 'react'

const DropdownWrapper = styled.div`
    height: 100%;
    position: relative;

    input {
        height: inherit;   
        text-align: right;
        cursor: pointer;
    }

    ul {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        transform: translate(10px, 5px);
        clip-path: polygon(-200% 0, 100% 0, 100% 100%, -200% 100%);
        

        li {    
            min-width: 0%;
            transition: min-width 0.4s;
            margin: 1px;
            button {
                border-bottom-right-radius: 0px;
                border-top-right-radius: 0px; 
                width: 100%; 
                text-transform: capitalize;
                max-width: none;   
            }  
        }
        li:hover{
                min-width: 200%;
            }
    }    
`

const CategoryButton = styled.button`
    animation: anim  0.4s forwards;
    animation-delay: ${(props) => props.delay};
    transform: translateX(300px);
    @keyframes anim {
        from {
            transform: translateX(300px);
        }
        to {
            transform: translateX(0px);
        }
    }

`

const CategoryDropdown = (props) => {
    const dispatch = useDispatch()
    const [category, setCategory] = useState('Select a category...');
    const [focus, setFocus] = useState(false);
    let categories = ['italian', 'french', 'texmex', 'indian', 'takeaway', 'english breakfast'];
    //let categories = props.categories;
    //categories.push('none');


    const current = props.current;

    const handleDrop = (e) => {
        switch (e.type) {
            case 'focus':
                setFocus(true);
                break;
            case 'blur':
                setTimeout(()=>setFocus(false), 200)
                break;
            default:
                console.error('unhandled event type');
        }
    }

    const handleSelect = (e) => {
        setFocus(true)
        if(e.target.innerHTML==='none') {
            setCategory('Select a category...');
        } else {
            setCategory(e.target.innerHTML);
        }
    }

    useEffect(() => {
        let dispatchCategory = '';
        if (category != 'Select a category...') {
            dispatchCategory = category;
        }
        dispatch(search(current, dispatchCategory));
    }, [category, current])

    return (
        <DropdownWrapper>
           <input 
                value={category}
                onFocus={handleDrop}
                onBlur={handleDrop}
                readOnly
            >       
            </input>
            {focus &&
            <ul>
                {
                categories.map((category, index) => {
                    return(
                        <li key={index}>
                            <CategoryButton 
                                delay={(index*0.2).toString()+'s'}
                                onClick={handleSelect}
                                >
                                    {category}
                            </CategoryButton>
                        </li>)
                    })
                }
               
            </ul>
            }
        </DropdownWrapper>
    )
}

export default CategoryDropdown;
