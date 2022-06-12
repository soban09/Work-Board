import React, {useContext} from 'react'

import Box from './Box/Box'
import WorkBoardContextProvider from "./context/workBoard-context";

const Body = () => {
  const ctx = useContext(WorkBoardContextProvider);
  // var colors = ['rgb(173 26 26)', '#f28b05', '#da00ff', '#5954c4', 'green'];

  return (
    <div className='body'>
      
    <Box className='todoBox' heading='Todo' count={ctx.count.todo} type={0} color='rgb(173 26 26)'/>
    <Box className='progressBox' heading='Progress' count={ctx.count.progress} type={1} color='#f28b05'/>
    <Box className='finishedBox' heading='Done' count={ctx.count.done} type={2} color='#da00ff'/>
  
    </div>
  )
}

export default Body