import React, { useState } from "react";
import { addPost } from "./reducer";
import { useDispatch } from "react-redux";

import { useParams, Link, useNavigate } from "react-router-dom";


export default function CreatePost() {
    const { tid } = useParams();
    const [postTitle, setPostTitle] = useState("");
    const [postDesc, setPostDesc] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const newPost = () => {
      return {
        postTitle,
        postDesc,
        title: tid,
      };
    };
  
    const backToTopicPage = () => {
      navigate(`/${tid}/Posts`);
    };
  
    const addNewPost = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 
      const post = newPost();
      dispatch(addPost(post));
      setPostTitle("");
      setPostDesc("");
      backToTopicPage();
    };
  
    return (
      <div>
        <div className="row home-page-row">
        <div className="col col-6">
          <div className="col border-rounded search-container">
            <input className="border-0 full-width" placeholder="Search" />
          </div>
        </div>
        <div className="col col-6">
          <div className="col button-container">
            <Link
              to="/Home"
              className="link-dark link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
            >
              <button className="btn btn-lg btn-danger me-1 float-end full-width">
                Home Page
              </button>
            </Link>
            <button className="btn btn-lg btn-danger me-1 float-end full-width">
              Profile
            </button>
          </div>
        </div>
      </div>
      <div
        className="row content-input"
        style={{ width: "50%", margin: "0 auto" }}
      >
        <h2>{tid}</h2>
        <form onSubmit={addNewPost}> 
          <div className="mb-3">
            <label htmlFor="postTitle" className="form-label">
              Post Title
            </label>
            <input
              type="text"
              id="postTitle"
              name="postTitle"
              className="form-control"
              placeholder="Enter your post title here"
              value={postTitle} 
              onChange={(e) => setPostTitle(e.target.value)} 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="postDescription" className="form-label">
              Post Description
            </label>
            <textarea
              id="postDescription"
              name="postDescription"
              className="form-control"
              placeholder="Enter your post description here"
              rows={4}
              value={postDesc} 
              onChange={(e) => setPostDesc(e.target.value)} 
            ></textarea>
          </div>
          <button
            type="submit" 
            className="btn btn-lg btn-danger me-1 float-end full-width"
          >
            Save
          </button>
          <button
            type="button" 
            className="btn btn-lg btn-secondary me-1 float-end"
            onClick={backToTopicPage}
          >
            Cancel
          </button>
        </form>
        </div>
      </div>
    );
  }