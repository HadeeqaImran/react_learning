import React, {useState, useReducer, useEffect} from 'react'
import axios from 'axios';

function DF() {
    const [post, setPost] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => {
            setLoading(false);
            setPost(response.data)
            setError('')
        })
        .catch(err => {
            setLoading(true)
            setPost({})
            setError("Something went wrong!")
        })
    })
  return (
    <div>
        {loading ? 'Loading' : post.title}
        {error ? error : null}
    </div>
  )
}

export default DF