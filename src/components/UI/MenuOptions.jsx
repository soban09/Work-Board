import React, {useContext} from 'react'
import { ImForward } from "react-icons/im";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BsArchive } from "react-icons/bs";

import WorkBoardContextProvider from "../context/workBoard-context";

const MenuOptions = ({idx, type}) => {
    const ctx = useContext(WorkBoardContextProvider);

    const sendtoToDo = () => {
        ctx.shuffleTodo(idx, 0);
    }
    const sendtoProgress = () => {
        ctx.shuffleTodo(idx, 1);
    }
    const sendtoDone = () => {
        ctx.shuffleTodo(idx, 2);
    }
    const deleteTodo = () => {
        ctx.deleteTodo(idx);
    }
    const archiveTodo = () => {
        ctx.shuffleTodo(idx, 3);
    }

    return (
        <div className='menu'>
            <ul>
                <li className={`${type === 0 ? 'disabled' : 'menu-list'}`} onClick={type === 0 ? ()=>{} : sendtoToDo}><ImForward /> Send to Todo</li>
                <li className={`${type === 1 ? 'disabled' : 'menu-list'}`} onClick={type === 1 ? ()=>{} : sendtoProgress}><ImForward /> Send to Progress</li>
                <li className={`${type === 2 ? 'disabled' : 'menu-list'}`} onClick={type === 2 ? ()=>{} : sendtoDone}><ImForward /> Send to Done</li>
                <li className='menu-list' onClick={deleteTodo}><RiDeleteBin5Line /> Delete</li>
                <li className='menu-list' onClick={archiveTodo}><BsArchive /> Archive</li>
            </ul>
        </div>
    )
}

export default MenuOptions


