import React, { useState, useContext, useCallback, useEffect } from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import { GiProgression } from "react-icons/gi";
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { RiTodoFill } from "react-icons/ri";

import MenuOptions from './MenuOptions';
import WorkBoardContextProvider from "../context/workBoard-context";

const Card = (props) => {
  const ctx = useContext(WorkBoardContextProvider)
  const [show, setShow] = useState(false);

  const openOption = (event) => {
    event.preventDefault();
    setShow(true);
  }

  const deleteTodoHandler = () => {
    ctx.deleteTodo(props.id);
  }

  const handleClick = useCallback(() => (show ? setShow(false) : null), [show]);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("contextmenu", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("contextmenu", handleClick);
    };
  });

  return (
    <div onContextMenu={openOption} className='card' style={{ backgroundColor: props.color }}>
      <h3 className='card-heading'>{props.title}</h3>
      {props.type === 0 ? <RiTodoFill className='card-icon-right' /> : ''}
      {props.type === 1 ? <GiProgression className='card-icon-right' /> : ''}
      {props.type === 2 ? <BsFillCheckCircleFill className='card-icon-right' /> : ''}
      <p>{props.desc}</p>
      {/* <BsPencilFill onClick={} className='card-icon card-icon-left' /> */}
      <RiDeleteBin5Line onClick={deleteTodoHandler} className='card-icon card-icon-right' />

      {show ? <MenuOptions idx={props.id} type={props.type}/> : <></>}
    </div>
  )
}

export default Card