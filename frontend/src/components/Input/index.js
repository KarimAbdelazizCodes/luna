import React from 'react';
import { InputWrapper } from './styled';
import { useState } from 'react';
import { useDispatch} from 'react-redux';

const Input = (props)  => {
    const dispatch = useDispatch();
    const [focus, setFocus] = useState(false);

    const activeHandler = (e) => {
        if (e.type === 'focus') {
            setFocus(true);
        } else if (e.type === 'blur' && e.target.value === '') {
            setFocus(false);
        }
    }

    const changeHandler = (e) => {
        const value = e.target.value;
        const key = e.target.id;
        const payload = {[props.formId]: {[key]: value}};
        const type = 'STORE_INPUT';
        dispatch({type: type, payload: payload});
    }

    const defineInputType = (word) => {
        switch (word) {
            case 'password' || 'password_repeat':
                return 'password';
            case 'email':
                return 'email';
            default:
                return 'text';
        }
    }
    
    return (
        <InputWrapper searchFocus={focus}>
        <label className='template' htmlFor={props.name}>{props.placeholder}</label>
        <input
        onFocus={activeHandler}
        onBlur={activeHandler}
        onChange={changeHandler}
        id={props.name}
        type={defineInputType(props.name)}
        />
        </InputWrapper>
    )
}

export default Input
