import React, { useContext , useEffect} from 'react';
import { store } from '../store'
import './test.css';

const Test = ({message}) => {
    const globalState = useContext(store);
    const { dispatch } = globalState;
    console.log(globalState);
    const myFunc = () => {
        dispatch({ type: 'action description' })
    }
    
    return (
        <>
            <h1 className="mytet">HELLO {message}!</h1>
            <button onClick={myFunc}>Click me!</button>
        </>
    );
}

export default Test;