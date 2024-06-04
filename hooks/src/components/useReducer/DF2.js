import React, {useReducer, useEffect} from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    error: '',
    post: {}
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                error: '',
                post: action.payload
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: "Something went wrong!"
            }
        default:
            return state
    }
};

function DF2() {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => {
            console.log(response.data)
            dispatch({type: 'FETCH_SUCCESS', payload: response.data})
        })
        .catch(err => {
            dispatch({type: 'FETCH_ERROR'})
        })
    }, [])
    return (
    <h1>
        {state.loading ? "Loading": state.post.title}
        {state.error ? state.error : null}
    </h1>
  )
}

export default DF2