import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes, // Instead of Switch
  
} from 'react-router-dom';

import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import AddTodo from './MyComponents/AddTodo';
import About from './MyComponents/About';

function App() {
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: 'Go to the market',
      desc: 'you need to go to the market',
    },
    {
      sno: 2,
      title: 'Go to the school',
      desc: 'you need to go to the school',
    },
  ]);

  const onDelete = (todo) => {
    console.log('I am on delete of todo', todo);
    setTodos(todos.filter((e) => e !== todo));
  };

  const addTodo = (title, desc) => {
    console.log('I am adding this todo', title, desc);
    let sno = 0;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  return (
    <Router>
      <Header title="MyTodoList" searchBar={false} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
