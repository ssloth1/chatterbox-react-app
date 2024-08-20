import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { allUsers, fetchPosts } from "../Profile/client"; // Assuming this is the correct import for fetching posts
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
  const navigate = useNavigate(); // For navigating programmatically
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
        navigate('/'); // Navigate to the homepage if an error occurs
      }
    };

    fetchAndFilterPosts();
  }, [pid, navigate]);

  // Fetch the creator's profile and set the creator's username
  const fetchAndSetCreatorName = async (creatorId: string) => {
    try {
      const users = await allUsers(); // Fetch all users
	  console.log(users);
      const creator = users.find((user: User) => user._id === creatorId); // Find the user that matches the creatorId
      if (creator) {
        setCreatorName(creator.username); // Set the creator's username
		setCreatorId(creator._id);
      }
    } catch (err) {
      console.error("Couldn't load creator's profile", err);
    }
  };

  const handleDelete = (postId: string) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      dispatch(deletePost(postId));
      navigate('/Home');
    }
  };

  if (!post) {
    return null; // Optionally render a loading indicator here
  }

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
            <Link to="/Home" className="link-dark link-underline link-underline-opacity-0 link-underline-opacity-100-hover">
              <button className="btn btn-lg btn-danger me-1 float-end full-width">
                Home Page
              </button>
            </Link>
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
            <button className="btn btn-lg btn-danger del-post me-1 float-end" onClick={() => handleDelete(post._id)}>
              Delete Post
            </button>
          </div>
        </div>
        <div className="col-9 center-col">
          <div className="content-desc-container">
            <>
              <h2>{post.postTitle}</h2>
              <h5>{post.postDesc}</h5>
              <p>
				Created by:{" "}
				{creatorId ? (
					<Link 
					to={`/profile/${creatorId}`} 
					className="creator-link" 
					>
					{creatorName}
					</Link>
				) : (
					"Anonymous User"
				)}
				</p> 
            </>
          </div>
        </div>
      </div>
    </div>
  );
}
