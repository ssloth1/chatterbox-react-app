import React, { useState, useEffect } from "react";
import LeftSideBar from "./LeftSideBar";
import CenterPanel from "./CenterPanel";
import CreatePost from "./CenterPanel/CreatePost";
import EditPost from "./CenterPanel/EditPost";
import { Route, Routes, Navigate } from "react-router-dom";

export default function Content({
	posts,
	fetchPosts,
}: {
	posts: any;
	fetchPosts: any;
}) {
	return (
		<div className="row">
			<LeftSideBar />
			<Routes>
				{/* <Route path="/" element={<CenterPanel posts={posts} fetchPosts={fetchPosts} />} /> */}
				<Route path="/" element={<Navigate to="CenterPanel" />} />
				<Route path="/CenterPanel" element={<CenterPanel posts={posts} fetchPosts={fetchPosts} />} />
				<Route path="/CreatePost" element={<CreatePost fetchPosts={fetchPosts} />} />
				<Route path="/EditPost/:pid" element={<EditPost fetchPosts={fetchPosts} />} />
			</Routes>
			{/*  */}
			{/* <EditTopic /> */}
		</div>
	);
}