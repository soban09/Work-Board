import React, { useState, useEffect } from "react";

const WorkBoardContext = React.createContext({
    list: [],
    addTodo: (todo) => { },
    shuffleTodo: (idx, newType) => { },
    deleteTodo: (idx) => { },
    count: {},
    search : {},
    setSearch : (val1, val2) => {}
})

export const WorkBoardContextProvider = (props) => {

    const [search, setSearch] = useState({
        title : '',
        state : false
    });
    
    const [count, setCount] = useState({
        todo: 0,
        progress: 0,
        done: 0,
        archive: 0
    })
    const [list, updateList] = useState([
        {
            id: 1,
            title: 'Sample 1',
            description: 'Some work need to happen',
            type: 0
        },
        {
            id: 2,
            title: 'Sample 2',
            description: 'Some work need to happen',
            type: 0
        },
        {
            id: 3,
            title: 'Sample 3',
            description: 'Some work need to happen',
            type: 0
        },
        {
            id: 4,
            title: 'Sample 4',
            description: 'Some work need to happen',
            type: 1
        },
        {
            id: 5,
            title: 'Sample 4',
            description: 'Some work need to happen',
            type: 1
        },
        {
            id: 6,
            title: 'Sample 5',
            description: 'Some work need to happen',
            type: 1
        },
        {
            id: 7,
            title: 'Sample 6',
            description: 'Some work need to happen',
            type: 2
        },
        {
            id: 8,
            title: 'Sample 5',
            description: 'Some work need to happen',
            type: 2
        },
        {
            id: 9,
            title: 'Sample 5',
            description: 'Some work need to happen',
            type: 2
        },

    ])

    const addTodoHandler = (todo) => {
        updateList((prvList) => {
            return [...prvList, {
                id: list.length,
                title: todo.title,
                description: todo.desc,
                type: 0
            }]
        })
    }

    const shuffleTodoHandler = (idx, newType) => {
        updateList(
            list.map((item) => {
                return item.id === idx ? { ...item, type: newType } : item
            })
        )
    }

    const deleteTodoHandler = (idx) => {
        updateList(
            list.filter(item => item.id !== idx)
        )
    }

    const searchBtnHandler = (val1, val2) => {
        console.log('demn');
        setSearch(() => {
            return {
                title : val1,
                state : val2
            }
        })
    }

    useEffect(() => {
        var t = 0, p = 0, d = 0, a = 0;
        list.forEach((item) => {
            if (item.type === 0) t++;
            else if (item.type === 1) p++;
            else if (item.type === 2) d++;
            else a++;
        })

        setCount((prvList) => {
            return { ...prvList, todo: t, progress: p, done: d, archive: a };
        })
    }, [list])


    return <WorkBoardContext.Provider
        value={{
            list: list,
            addTodo: addTodoHandler,
            shuffleTodo: shuffleTodoHandler,
            deleteTodo: deleteTodoHandler,
            count: count,
            search : search,
            setSearch : searchBtnHandler
        }}>
        {props.children}
    </WorkBoardContext.Provider>
}

export default WorkBoardContext;