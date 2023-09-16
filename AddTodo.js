import React, { useState } from "react";

const AddTodo = ({addTodo}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e)=>{
 e.preventDefault();
 if(!title || !desc){
    alert("Title or Description cannot be blank");
 }
addTodo(title, desc)
  
  }



  return (
    <div className="container my-3">
        <h3>Add a todo</h3>
      <form onSubmit={submit} >
        <div className="form-group">
          <label htmlFor="title">Todo Title</label>
          <input
            type="text"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
         
        </div>
        <div className="form-group">
          <label htmlFor="desc">Deisciption</label>
          <input
            type="text"
            value={desc}
            onChange={(e)=>setDesc(e.target.value)}
            className="form-control"
            id="desc"
          />
        </div>
       
        <button type="submit" className="btn btn-primary">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
