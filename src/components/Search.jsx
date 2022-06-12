import React, {useContext, useEffect, useState} from 'react'

import {ImCross} from 'react-icons/im'

import WorkBoardContextProvider from "./context/workBoard-context";

const Search = () => {
  const ctx = useContext(WorkBoardContextProvider);

  const [searchTitle, setSearchTitle] = useState('');
  const [searchValid, setSearchValid] = useState(false);

  const titleChangeHandler = (event) => {
    setSearchTitle(event.target.value);
  }

  const submitTitle = () => {
    if(searchValid){
      ctx.setSearch(searchTitle, true);
    }
  }

  const keyPressHandler = (e) => {
    if(e.key==='Enter' && searchValid){
      ctx.setSearch(searchTitle, true);
    }
  }

  const cancelSearch = () => {
    setSearchTitle('');
    ctx.setSearch('', false);
  }

  useEffect(() => {
    if(searchTitle.trim().length > 2){
      setSearchValid(true);
    }
    else{
      setSearchValid(false);
    }
  }, [searchTitle])
  

  return (
    <div className='search-bar'>
        <input onChange={titleChangeHandler} onKeyPress={keyPressHandler} value={searchTitle} type="text" placeholder='title'/>
        {ctx.search.state ? <button onClick={cancelSearch} className='search-btn cross-btn'><ImCross/></button>
        : <button onClick={submitTitle} className={`${searchValid ? 'search-btn search-btn-btn' : 'disable-btn'}`}>search</button>}
    </div>
  )
}

export default Search
