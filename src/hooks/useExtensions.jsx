/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from 'react'
import initialData from '../../data.json'

const ExtensionsContext = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_EXTENSION':
            return {
                ...state,
                data: state.data.filter((item) => item.id !== action.payload)
            }
        case 'TOGGLE_EXTENSION':
            return {
                ...state,
                data: state.data.map((item) =>
                    item.id === action.payload
                        ? {
                              ...item,
                              isActive: !item.isActive
                          }
                        : item
                )
            }
        case 'SET_FILTER':
            return {
                ...state,
                filter: action.payload
            }
        default:
            return state
    }
}

export const ExtensionsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {
        data: initialData,
        filter: 'all'
    })

    return (
        <ExtensionsContext.Provider value={{ state, dispatch }}>
            {children}
        </ExtensionsContext.Provider>
    )
}

export const useExtensions = () => useContext(ExtensionsContext)
