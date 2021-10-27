import React from "react";
import { useHistory } from 'react-router-dom';

export const AboutPage: React.FC = () => {
    const history = useHistory();
    return (
        <div className='center'>
            <div className='mt5'>
                <img src="https://english-grammar.biz/dictionary/img/wlibrary/t/60532b622ab8e1.35659324.jpg"
                     alt="todo"/>
            </div>
            <button className='btn mt2' onClick={() => history.push('/')}>Open my lists</button>
        </div>
    )
}
