import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchPosts } from "./client"; // Assume this function fetches all posts from the server

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
  topicName: string;
  creator: string;
  creationDate: string;
};

export default function Community() {
  const { userId } = useParams();
  const [topics, setTopics] = useState<Topic[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAndFilterPosts = async () => {
      try {
        const allPosts = await fetchPosts(); // Fetch all posts
        const userTopics = allPosts
          .filter((post: Post) => post.creator === userId)
          .map((post: Post) => ({
            _id: post.topicID,
            topicName: post.postTitle, 
            creator: post.creator,
            creationDate: post.postDate,
          }));
        setTopics(userTopics);
      } catch (err) {
        setError("Failed to fetch posts.");
      }
    };

    fetchAndFilterPosts();
  }, [userId]);

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
            <li key={topic._id} className="topic-item">
              <Link to={`/topics/${topic._id}`}>
                {topic.topicName}
              </Link>
            </li>
          ))
        )}
      </div>
    </div>
  );
}