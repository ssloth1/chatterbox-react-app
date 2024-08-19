import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import * as topicClient from "./client";
import "./styles.css";
import NavBar from "./Navbar";
// import Content from "./Content";
import CenterPanel from "./Content/CenterPanel";
import LeftSideBar from "./Content/LeftSideBar";
import CreatePost from "./Content/CenterPanel/CreatePost";
import EditPost from "./Content/CenterPanel/EditPost";
import { findPostsForTopic } from "../PostPage/client";
import Content from "./Content";

export default function TopicPage() {
  const { tid } = useParams();
  const [posts, setPosts] = useState<any[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  async function fetchPosts() {
    setPosts(await findPostsForTopic(tid || "", searchText));
  }
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <>
      <NavBar
        searchText={searchText}
        setSearchText={setSearchText}
        fetchPosts={fetchPosts}
      />
      <Content posts={posts} fetchPosts={fetchPosts} />
    </>
  );
}