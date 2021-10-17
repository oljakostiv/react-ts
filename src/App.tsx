import React from 'react';
import {Navbar} from "./components/Navbar";
import {TodoForm} from "./components/TodoForm";

const App: React.FC = () => {
    return (
        <>
        <Navbar/>
            <div>
                <TodoForm/>
            </div>
        </>
    );
}

export default App;
