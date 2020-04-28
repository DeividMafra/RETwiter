import React, { useEffect, useState } from 'react';
import PostItem from './PostItem';
import Loader from '../layout/Loader';

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
    return <Loader />
  }

  return (
    <div>
      <h4 className="center">Posts</h4>
      <ul className="collection">
        <li className="collection-item avatar">
          {!loading && posts.length === 0
            ?
            (<p className="center">There is no posts!</p>)
            :
            posts.map((post, i) => <PostItem post={post} key={i} />)}
        </li>
      </ul>
    </div>
  )
}

export default Posts
