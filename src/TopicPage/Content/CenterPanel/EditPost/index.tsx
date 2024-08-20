import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchPost, updatePost } from "../../../../PostPage/client";

export default function EditPost({ fetchPosts }: { fetchPosts: any }) {
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [post, setPost] = useState<any>(undefined);
	const { pid } = useParams();
	const navigate = useNavigate();

	// Fetch post data on component mount
	useEffect(() => {
		const fetchData = async () => {
			if (pid) {
				const fetchedPost = await fetchPost(pid);
				setPost(fetchedPost);
				setTitle(fetchedPost.postTitle);
				setDesc(fetchedPost.postDesc);
			}
		};
		fetchData();
	}, [pid]);
	const renewPost = async () => {
		if (post) {
			const updatedPost = { ...post, postTitle: title, postDesc: desc };
			await updatePost(updatedPost);
			navigate("./../../");
			fetchPosts(post.topic);
		}
	};

	return (
		<div className="col-12 col-md-9 border border-1">
			<div className="mt-4 mx-5">
				<div className="row heading">
					<h1 className="text-muted">Edit Post</h1>
				</div>
				<div className="row form">
					<form>
						<div className="form-group mt-2">
							<label htmlFor="topicTitle">Post Title:</label>
							<input
								type="text"
								className="form-control mt-2"
								id="topicTitle"
								placeholder="Enter Title"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							/>
						</div>
						<div className="form-group mt-2">
							<label htmlFor="topicDescription">Post Description:</label>
							<textarea
								className="form-control mt-2 mb-2"
								id="topicDescription"
								placeholder="Enter Description"
								rows={3}
								value={desc}
								onChange={(e) => setDesc(e.target.value)}
							></textarea>
						</div>
					</form>
				</div>
				<div className="row buttons mb-2">
					<div className="col col-1">
						<button
							type="button"
							className="btn btn-success"
							onClick={renewPost}
						>
							Save
						</button>
					</div>
					<div className="col col-1">
						<button
							type="button"
							className="btn btn-danger"
							onClick={() => navigate("./../")}
						>
							Cancel
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}