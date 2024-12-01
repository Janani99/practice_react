import React, { useState ,useEffect} from 'react';
import TodoItem from './todoItem';
import AddTodo from './addTodo';
import EditTodo from './editTodo';

export default function Todo() {
    const [todo, setTodo] = useState([]);
    const [currentTodoText, setCurrentTodoText] = useState('');
    const [IsEditing,setIsEditing]=useState(false);
    const [currentTodoId, setCurrentTodoId] = useState(null);
    useEffect(() => {
        let todosFromLocalStorage = JSON.parse(
          window.localStorage.getItem("todo")
        );
        if (todosFromLocalStorage) {
          setTodo(todosFromLocalStorage);
        } else {
          setTodo([]);
        }
      }, []);
    const addTodo = (e) => {
        e.preventDefault();
        let id = new Date().getTime();
        setTodo((prev) => {
            let updataedTodo = [...prev, { id, text: currentTodoText }];
            window.localStorage.setItem('todo', JSON.stringify(updataedTodo));
            return updataedTodo;
        })
        setCurrentTodoText('');
    }
    const deleteTodo = (todoItem) => {
        let updateTodo = todo.filter((item) => item.id !== todoItem.id);
        setTodo((prev) => {
            let updataedTodo = [...updateTodo];
            window.localStorage.setItem('todo', JSON.stringify(updataedTodo));
            return updataedTodo;
        })
     }
     const editTodo=(e)=>{
        e.preventDefault();
        let updatedTodo = todo.map((item) => item.id === currentTodoId? {id: currentTodoId, text: currentTodoText} : item);
        setTodo((prev) => {
            let updataedTodo = [...updatedTodo];
            window.localStorage.setItem('todo', JSON.stringify(updataedTodo));
            return updataedTodo;
        })
        setCurrentTodoText('');
        setIsEditing(false);
        setCurrentTodoId(null);
     }
     const handleEditTodo=(todoItem)=>{
        setIsEditing(true);
        setCurrentTodoText(todoItem.text)
        setCurrentTodoId(todoItem.id);
        
     }
    console.log("addTod", todo)
    return (
        <div>
           {!IsEditing &&  <AddTodo
            addTodo={addTodo}
            currentTodoText={currentTodoText}
            onChange={(e) => setCurrentTodoText(e.target.value)}
            />}
          {IsEditing &&  <EditTodo
            editTodo={editTodo}
            currentTodoText={currentTodoText}
            onChange={(e) => setCurrentTodoText(e.target.value)}
            />}
             
            {
                todo.map(item => (
                    <TodoItem key={item.id} item={item} deleteTodo={deleteTodo} handleEditTodo={handleEditTodo} />
                ))
            }

        </div>
    )
}
