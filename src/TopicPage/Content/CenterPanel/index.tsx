import React, { useState, useEffect } from "react";
import PostCard from "./PostCard";
import { useParams } from "react-router";
export default function CenterPanel({posts, fetchPosts}:{posts: any, fetchPosts:any}) {
const {tid} = useParams();
  return (
    <div className="col-12 col-md-9 border border-1 ">
      <div className="mt-4 mx-5 ">
        <h1 className=".text-muted">Posts</h1>
        {posts.map((post: any)=>{
          return <PostCard  post={post} fetchPosts={fetchPosts}/>
        })}
      </div>
    </div>
  );
}
