import React, { useReducer, createContext } from "react"
import { listReducer } from "../reducers/listReducer"

export const DataContext = createContext()

const initialState = [
    {
        id: 1,
        title: "this is title one"
    }
]

export const DataProvider = (props) => {
    const [lists, dispatch] = useReducer(listReducer, initialState)   
    // const add = title => {
    //     const newItem = {
    //         id: lists.length + 1,
    //         title
    //     }
    //     const newLists = [...lists, newItem]
    //     setList(newLists)
    // }
    // const del = id => {
    //     const newLists = lists.filter(item => item.id !== id)
    //     setList(newLists)
    // }
    return(
        <DataContext.Provider value={{ lists, dispatch }}>
            {props.children}
        </DataContext.Provider>
    )
}