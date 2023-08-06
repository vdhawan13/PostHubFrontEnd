import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const View = () => {
  let postId=useParams().postId;
  const [post,setPost]=useState({});

  useEffect(() => {
    const getPost = async () => {
      const { data } = await axios.get(`https://posthubbackend.onrender.com/api/${postId}`);
      setPost(data.post);
      console.log(data.post);
    };
  
    getPost();
  }, [postId]); // Include 'postId' as a dependency
  

  return (
    <div className="container">
      <h5>{post.name}</h5>
      <img src={post.image} alt="" srcSet="" style={{ width: '300px', height: '200px' }} />
      <p>{post.text}</p>
    </div>
  );  
}

export default View