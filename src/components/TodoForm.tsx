import React, {useRef} from "react";

export const TodoForm: React.FC = () => {
    const ref = useRef<HTMLInputElement>(null);
    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            console.log(ref.current!.value);
            ref.current!.value = '';
        }
    }
    return (
        <div className='input-field mt2'>
            <input ref={ref} type="text" id='title' placeholder='Data name' onKeyPress={keyPressHandler}/>
            <label htmlFor="title" className='active'>Search:</label>

        </div>
    )
}


