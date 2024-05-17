import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetch() {
    const [posts, setPosts] = useState([]);
    const [button, setButton] = useState(false);
    useEffect(() => {
        // Returns a promise
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, []);
  return (
    <div>
        <button onClick={() => setButton(!button)}>Click for Posts</button>
        {
         button && <ul>
            { 
                posts.map(post => (<li key={post.id}>{post.title}</li>))
            }
        </ul>
        }
    </div>
  )
}

export default DataFetch