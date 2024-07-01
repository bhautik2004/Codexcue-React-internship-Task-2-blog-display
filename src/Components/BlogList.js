import {useState,useEffect} from "react";
import BlogPost from './BlogPost';

const BlogList = ()=>{
    const [blogs,setblog]=useState([]);

    useEffect(()=>{
        fetch('/blogs.json')
        .then(response=>response.json())
        .then(data=>setblog(data))
        
    },[]);

    return (
        <div>
            <h1 className="text-center my-5">Blog Posts</h1>
            {blogs.map(blog=>(
                <BlogPost key={blog.id} blog={blog}/>
            ))}
        </div>
    )
}
export default BlogList