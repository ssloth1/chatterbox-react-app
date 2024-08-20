import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { allUsers, fetchPosts } from "../Profile/client";
import { deletePost } from "./reducer";
import "./PostStyles/index.css";

type Post = {
  _id: string;
  topicID: string;
  postTitle: string;
  postDesc: string;
  creator: string;
  postDate: string;
  likes: number;
};

type User = {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dob: Date;
  role: string;
  __v: number;
};

export default function PostPage() {
  const { pid } = useParams(); // Get the post ID from the URL
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [post, setPost] = useState<Post | null>(null); // State for the current post
  const [creatorName, setCreatorName] = useState<string>("Anonymous User");  // State for the creator's username
  const [creatorId, setCreatorId] = useState<string | null>(null);

  // Fetch posts and set the current post based on the pid
  useEffect(() => {
    const fetchAndFilterPosts = async () => {
      try {
        const allPosts = await fetchPosts(); // Fetch all posts
        const currentPost = allPosts.find((post: Post) => post._id === pid); // Find the post that matches the pid
        setPost(currentPost); // Set the post if found

        if (currentPost) {
          fetchAndSetCreatorName(currentPost.creator); // Fetch the creator's username if the post is found
        }
      } catch (err) {
        console.error("Couldn't load post", err);
        navigate("/Home"); // Navigate to the homepage if an error occurs
      }
    };

    fetchAndFilterPosts();
  }, [pid, navigate]);

  // Fetch the creator's profile and set the creator's username
  const fetchAndSetCreatorName = async (creatorId: string) => {
    try {
      const users = await allUsers();
      const creator = users.find((user: User) => user._id === creatorId); // Find the user that matches the creatorId
      if (creator) {
        setCreatorName(creator.username);
      }
    } catch (err) {
      console.error("Couldn't load creator's profile", err);
    }
  };

  const handleDelete = (postId: string) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      dispatch(deletePost(postId));
      navigate("/Home");
    }
  };

  if (!post) {
    return null;
  }

  return (
    <div className="post-page">
      <div className="post-page-header">
        <div className="search-container">
          <input className="border-0 full-width" placeholder="Search" />
        </div>
        <div className="post-page-buttons">
          <Link
            to="/Home"
            className="link-dark link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
          >
            <button className="btn btn-danger btn-home">Home Page</button>
          </Link>
        </div>
      </div>
      <div className="post-page-content">
        <div className="post-sidebar">
          <button className="btn btn-warning btn-edit" onClick={() => navigate(`/EditPost/${post._id}`)}>
            Edit Post
          </button>
          <button className="btn btn-danger btn-delete" onClick={() => handleDelete(post._id)}>
            Delete Post
          </button>
        </div>
        <div className="post-content">
          <div className="post-details">
            <h2 className="post-title">{post.postTitle}</h2>
            <h5 className="post-desc">{post.postDesc}</h5>
            <p className="post-creator">
              Created by:{" "}
              {creatorId ? (
                <Link to={`/profile/${creatorId}`} className="creator-link">
                  {creatorName}
                </Link>
              ) : (
                "Anonymous User"
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
