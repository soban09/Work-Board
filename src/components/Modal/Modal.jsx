import React, { useState, useContext } from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { BsCursorText } from "react-icons/bs";
import { IoMdOptions } from "react-icons/io";

import WorkBoardContextProvider from "../context/workBoard-context";

const Modal = ({closeModal}) => {

  const ctx = useContext(WorkBoardContextProvider);

  const [todo, setTodo] = useState({
    title : '',
    desc : ''
  })

  const toDoChangeHandler = (event) => {
    const {name, value} = event.target;

    setTodo((prvValue) => {
      return {
        ...prvValue,
        [name] : value
      }
    })
  }

  const closeModalHandler = () => {
    closeModal(false);
    ctx.addTodo(todo);
  }

  return (
    <>
        <div onClick={closeModalHandler} className='backDrop' />
        <div className='modal'>
            <form action="">
                <label htmlFor="title">Title  </label>
                <BsCursorText className='modal-icon'/>
                <br></br>
                <input onChange={toDoChangeHandler} value={todo.title} type="text" name="title"/>
                <br></br>
                <label htmlFor="desc">Description  </label>
                <IoMdOptions className='modal-icon'/>
                <br></br>
                <input onChange={toDoChangeHandler} value={todo.desc} type="text" name="desc"/>
                <br></br>
                <button onClick={closeModalHandler} className='modal-btn' type="submit">Add</button>
            </form>
        </div>
    </>
  )
}

export default Modal