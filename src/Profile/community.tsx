import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { allUsers, fetchPosts } from "./client"; // Assume this function fetches all posts from the server

type Post = {
  _id: string;
  topicID: string;
  postTitle: string;
  postDesc: string;
  creator: string;
  postDate: string;
  likes: number;
};

type Topic = {
  _id: string;
  postlink: string;
  topicName: string;
  creator: string;
  creationDate: string;
};

type User = {
  _id: string,
  username: string,
  firstName: string,
  lastName: string
  email: string,
  phone: string,
  dob: Date,
  role: string,
  __v: number,
};

type CommunityProps = {
  currentUser: User; // Add the User type definition
};

export default function Community({ currentUser }: CommunityProps) {
  const { userId } = useParams();
  const [topics, setTopics] = useState<Topic[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAndFilterPosts = async () => {
      try {
        // profile/profile_id
        const allPosts = await fetchPosts(); 
        if (userId) {
          const userTopics = allPosts
            .filter((post: Post) => post.creator === userId)
            .map((post: Post) => ({
              _id: post.topicID,
              postlink: post._id,
              topicName: post.postTitle,
              creator: post.creator,
              creationDate: post.postDate,
            }));
          setTopics(userTopics);
        } else {
          // find currentUser's ID /profile route
          const userTopics = allPosts
            .filter((post: Post) => post.creator === currentUser._id)
            .map((post: Post) => ({
              _id: post.topicID,
              postlink: post._id,
              topicName: post.postTitle,
              creator: post.creator,
              creationDate: post.postDate,
            }));
          setTopics(userTopics);
        }
      } catch (err) {
        setError("Failed to fetch posts.");
      }
    };

    fetchAndFilterPosts();
  }, [userId, currentUser._id]);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="community-container">
      <h2> Contributions</h2>
      <div className="topic-list">
        {topics.length === 0 ? (
          <p>No active communities found for this user.</p>
        ) : (
          topics.map((topic: Topic) => (
            <li key={topic.postlink} className="topic-item">
              <Link to={`/${topic.postlink}`}>
                {topic.topicName}
              </Link>
            </li>
          ))
        )}
      </div>
    </div>
  );
}