import React, { useEffect, useState } from 'react'

const Posts = () => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPosts();
    //eslint-disable-next-line
  }, []);

  const getPosts = async () => {
    setLoading(true);
    const res = await fetch('/posts');
    const data = await res.json();
    console.log('data', data)

    setPosts(data.posts);
    setLoading(false);
  }

  if (loading) {
    return <h4>Loading...</h4>
  }



  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">Posts</h4>
      </li>
      {!loading && posts.length === 0 ? (<p className="center">There is no posts!</p>) : posts.map(post => <li>{post.title}</li>)}
    </ul>
  )
}

export default Posts
