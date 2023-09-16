import { useEffect, useState } from 'react';


function Tracker() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
           .then((response) => response.json())
           .then((data) => {
              console.log(data);
              setPosts(data);
           })
           .catch((err) => {
              console.log(err.message);
           });
     }, []);

    const postsList = posts.map( (post) =>
        <li key={post.id}>{post.id} {post.title}</li>
    );

    return (
    <>
        <>
            <h2 className='flex flex-col items-center my-4'> Tracker</h2>
            <div className='flex flex-col items-center my-10'> {postsList} </div>
        </>
        
    </>
    );
  }
  
  export default Tracker;
  