import React from "react";
import posts from "../Database/posts.json";
import { useParams } from "react-router-dom";
import "./styles.css";

export default function PostPage() {
  const { pid } = useParams();

  const post = posts.find(post => post._id === pid);

  return (
    <div>
      <div className="row home-page-row">
        <div className="col col-6">
          <div className="border-rounded search-container">
            <input className="border-0 full-width" placeholder="Search" />
          </div>
        </div>
        <div className="col col-6">
          <div className="button-container">
            <button className="btn btn-lg btn-danger me-1 float-end full-width">
              Home Page
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-3 left-col">
          <div className="create-topic-button-container">
            <button className="btn btn-lg btn-danger edit-post me-1 float-end">
              Edit Post
            </button>
            <br /><br /><br />
            <button className="btn btn-lg btn-danger del-post me-1 float-end">
              Delete Post
            </button>
          </div>
        </div>
        <div className="col-9 center-col">
          <div className="content-desc-container">
            {post ? (
              <>
                <h5>{post.title}</h5>
                <h2>{post.postTitle}</h2>
                <p>{post.postDesc}</p>
              </>
            ) : (
              <p>Post not found.</p>
            )}
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}
