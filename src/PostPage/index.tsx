import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./Navbar";
import { fetchPost } from "./client";

// Define the interface for the post
interface Post {
  topic: String;
  postTitle: string;
  postDesc: string;
}

export default function PostPage() {
  const { pid } = useParams();
  const [post, setPost] = useState<Post | null>(null); // Now TypeScript knows the shape of 'post'

  useEffect(() => {
    const fetchData = async () => {
      const postData = await fetchPost(pid || "");
      setPost(postData);
    };
    fetchData();
  }, [pid]);

  return (
    <>
      <NavBar />
      <div className="row">
        <div className="col col-3"></div>
        <div className="col col-9 mt-5">
          {post ? (
            <>
              <h1>{post.topic}</h1>
              <h2>{post.postTitle}</h2>
              <p>{post.postDesc}</p>
            </>
          ) : (
            <p>Loading post...</p>
          )}
        </div>
        <div className="col col-3"></div>
      </div>
    </>
  );
}
