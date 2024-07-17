import React, { useState } from 'react';
import Styles from './TodoApp.module.css';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';


const TodoApp = () => {
  let [inputVal,setinputVal] = useState(' ');
  let [allTodo, setallTodo] = useState([]);

  const inputChange = (event)=>{
    setinputVal(event.target.value);
    event.preventDefault()
  };

  const inputAdd = ()=>{
    if (inputVal.trim()){
      setallTodo((SetPrev)=>[...SetPrev, inputVal]);
      setinputVal(' ');
    }
    else{
      alert("Please Enter Todo")
    }
  };

  const deleteAll = () =>{
    setallTodo([ ]);
  };

  const liDelete = (index) => {
    setallTodo(allTodo.filter((e, i) => i !== index));
  };

  const liEdit = (index) => {
    let editVal = prompt("Enter New Value");
    let newTodoArray = [...allTodo]; 
    newTodoArray[index] = editVal;
    setallTodo(newTodoArray); 
  };

  // console.log(allTodo);

  return (
    <div className={`container text-center mt-5`}>
      <div>
        <h1 className={Styles.heading}>Todo App</h1>
      </div>

      <div>
        <input onChange={inputChange} className={`w-75 mt-5 ${Styles.inputmain}`} type="text" placeholder='Enter Your Item' />
        <div className='text-center'>
        <div className='row'>
          <div className='col-12 col-lg-6 col-md-6 col-sm-12'>
          <button onClick={inputAdd} className={Styles.buttonmain}>Add</button>
          </div>
          <div className='col-12 col-lg-6 col-md-6 col-sm-12'>
          <button onClick={deleteAll} className={Styles.buttonmain}>Delete All</button>
          </div>
        </div>
        </div>
      </div>

      <div>
        {allTodo.map((e, i) => {
          return (
            <div key={i}>
              <ul className={`mt-5 ${Styles.ull}`}>
                <li>
                  {e}
                  <br />
                  <span>
                    <FaEdit onClick={() => liEdit(i)}/>
                  </span>
                  <span>
                    <MdDelete onClick={() => liDelete(i)}/>
                  </span>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default TodoApp