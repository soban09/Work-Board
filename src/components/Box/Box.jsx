import React, { useContext } from 'react'

import Card from '../UI/Card'
import EmptyBox from "../UI/EmptyBox";
import BoxHeaders from '../UI/BoxHeaders'
import WorkBoardContextProvider from "../context/workBoard-context";

const Box = (props) => {
  const ctx = useContext(WorkBoardContextProvider);

  const findNoOFSearchedElements = () => {
    return ctx.list.filter((item) => {
      return item.type === props.type && ctx.search.title === item.title
    }).length
  }

  return (
    <div className={props.className}>
      <BoxHeaders heading={props.heading} total={ctx.search.state ? findNoOFSearchedElements() : props.count} />

      {ctx.search.state ? (findNoOFSearchedElements()===0 ? <EmptyBox/> : <ul className='box'>
        {ctx.list.filter((item) => {
          return item.type === props.type && item.title.includes(ctx.search.title)
        }).map((item) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                title={item.title}
                desc={item.description}
                type={item.type}
                color={props.color}
              />
            )
          })}
      </ul>) : (props.count===0 ? <EmptyBox/> : <ul className='box'>
        {ctx.list.filter((item) => {
          return item.type === props.type
        }).map((item) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                title={item.title}
                desc={item.description}
                type={item.type}
                color={props.color}
              />
            )
          })}
      </ul>)}

      

    </div>
  )
}

export default Box

// ['rgb(173 26 26)', '#5954c4', '#f28b05', 'green', '#da00ff']