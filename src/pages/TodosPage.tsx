import React, { useState, useEffect } from "react";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";
import { ITodo } from "../model";

export const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        const getTodo = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
        setTodos(getTodo)
        //    get info
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
        //    save info
    }, [todos])

    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            title,
            id: Date.now(),
            completed: false
        }
// setTodos([newTodo, ...todos])
        setTodos(prev => [newTodo, ...todos])
    };

    const toggleHandler = (id: number) => {
        setTodos(prev => prev.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo
        }))
    };

    const removeHandler = (id: number) => {
        const isRemove = window.confirm('Delete?')
        if (isRemove) {
            setTodos(prev => prev.filter(todo => todo.id !== id))
        }
    };

    return <>
        <TodoForm onAdd={addHandler}/>

        <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler}/>
    </>

}
