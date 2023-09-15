import { useEffect, useState } from 'react';
import ButtonBar from '../../imagen-button-bar/ButtonBar';

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
        <main>
            <h2 className='flex flex-col items-center my-4'> Tracker</h2>
            <div className='flex flex-col items-center my-10'> {postsList} </div>
            <div>
                <ButtonBar/>
            </div>
        </main>
        
    </>
    );
  }
  
  export default Tracker;
  