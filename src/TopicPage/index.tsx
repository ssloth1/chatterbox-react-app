import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import posts from "../Database/posts.json";
import { deletePost } from "../PostPage/reducer";
import "./styles.css";
type Post = {
  _id: string;
  title: string;
  postTitle: string;
  postDesc: string;
};

export default function TopicPage() {

  const  tid  = "T1"; // Access the topic ID from URL parameters
  const [postData, setPostData] = useState<Post[]>([]);
  
  

  // Retrieve all posts with the same topic ID (tid)
  const postsWithSameTid = posts.filter((p: any) => p.title=== tid);
  useEffect(() => {
    const loadedPosts = postsWithSameTid.map((post) => ({
      _id: post._id,
      title: post.title,
      postTitle: post.postTitle,
      postDesc:
        post.postDesc.length > 200
          ? `${post.postDesc.substring(0, 197)}...`
          : post.postDesc,
    }));
    setPostData(loadedPosts);
  }, []);

  return (
<div className="full-page-container">
      <div className="header-container">
        <div className="search-container">
          <input className="border-0 full-width" placeholder="Search" />
        </div>
        <div className="profile-button-container">
          <button className="btn btn-lg btn-danger">Profile</button>
        </div>
      </div>

      <div className="content-container">
        <div className="left-col">
          <div className="create-post-button-container">
            <button className="btn btn-lg btn-danger">Create Post</button>
          </div>
        </div>
      
          <div className="content-desc-container">
            <h1>{tid}</h1>
            <h2>Posts:</h2>
            <ul>
              {postsWithSameTid.map((post: any) => (
                <div
                  key={post._id}
                  id="wd-topics-page"
                  className="p-3 bg-white rounded grey-border"
                >
                  <div className="topic-details">
                    <h3>{post.postTitle}</h3>
                    <p>{post.postDesc}</p>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        
      </div>
    </div>
  );
}
  

