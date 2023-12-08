import {useEffect, useState} from 'react'
import Loading from './components/Loading'
import Posts from './components/Posts'
import SinglePost from './components/SinglePost'


import './App.css'

function App() {

  const [posts, setPosts] = useState([])
  const [singlePost, setSinglePost] = useState(null)
  const [loading, setLoading] = useState(true)

  const getSinglePost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    setSinglePost(data)
  }

  const clearSinglePost = () => {
    setSinglePost(null)
  }

 
  useEffect(() => {

    const fetchPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await res.json()
      setPosts(data)
      setLoading(false)
    }

    fetchPosts()

  }, []) 

  if(loading) {
    return (
      <div className="container">
        <Loading />
      </div>
    )
  }

  if(!loading && singlePost) {
    return (
      <div className="container">
        <SinglePost singlePost={singlePost} 
          clearSinglePost={clearSinglePost}
        />
      </div>
    )
  }
      
  return (
    <div className="container">
        <Posts posts={posts} 
          getSinglePost={getSinglePost}
        />
      </div>
  )

  
}

export default App
