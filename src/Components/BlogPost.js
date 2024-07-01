import React from "react";

const BlogPost = ({ blog }) => {
  return (
      <div class="card my-5">
        <div class="card-header">{blog.title}</div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>{blog.content}</p>
            <footer class="blockquote-footer">
              by : <cite title="Source Title">{blog.author}</cite>
            </footer>
          </blockquote>
        </div>
      </div>
  );
};

export default BlogPost;
