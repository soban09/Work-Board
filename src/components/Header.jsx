import React, {useContext} from 'react'
import { BsFillArchiveFill } from "react-icons/bs";

import WorkBoardContextProvider from './context/workBoard-context';

const Header = () => {
  const ctx = useContext(WorkBoardContextProvider)

  return (
    <div className='header'>
      <h1>Work Board</h1>
      <div className='archive'>
        <BsFillArchiveFill className='header-icon' />
        <div className='archive-count'>
          <p>{ctx.count.archive}</p>
        </div>
      </div>
    </div>
  )
}

export default Header