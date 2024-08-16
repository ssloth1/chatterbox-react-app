import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import posts from "../Database/posts.json";
import Sidebar from "../Sidebar";
import "./index.css";

type Post = {
	_id: string;
	title: string;
	postTitle: string;
	postDesc: string;
};

export default function HomePage() {
	const [postData, setPostData] = useState<Post[]>([]);

	useEffect(() => {
		const loadedPosts = posts.map((post) => ({
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
		<div className="container-fluid">

			<Sidebar />

			<div className="main-content">
				<div className="row home-page-row">
					<div className="col col-12">
						<div className="col border-rounded search-container">
							<input className="border-0 full-width" placeholder="Search" />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-9 center-col">
						<div className="content-container">
							<h1>Posts</h1>
							{postData.map((post, index) => (
								<div key={index} className="post-details">
									<Link
										to={`/${post._id}`}
										className="link-dark link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
									>
										<b>{post.title}</b>
										<h5>{post.postTitle}</h5>
										<p>{post.postDesc}</p>
									</Link>
								</div>
							))}
						</div>
					</div>
					<div className="col-3"></div>
				</div>
			</div>
		</div>
	);
}
