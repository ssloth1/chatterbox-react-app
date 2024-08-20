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
		if (pid) {
			fetchPost(pid).then(fetchedPost => {
				setPost(fetchedPost);
				setTitle(fetchedPost.postTitle);
				setDesc(fetchedPost.postDesc);
			});
		}
	}, [pid]);

	const renewPost = async () => {
		if (post) {
			await updatePost({ ...post, postTitle: title, postDesc: desc });
			navigate("./../../");
			fetchPosts(post.topic);
		}
	};

	return (
		<div className="col-12 col-md-9 border border-1 p-4">
			<h1 className="text-muted mb-4">Edit Post</h1>
			<form>
				<div className="form-group mb-3">
					<label htmlFor="postTitle">Post Title:</label>
					<input
						type="text"
						className="form-control mt-2"
						id="postTitle"
						placeholder="Enter Title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div className="form-group mb-4">
					<label htmlFor="postDescription">Post Description:</label>
					<textarea
						className="form-control mt-2"
						id="postDescription"
						placeholder="Enter Description"
						rows={3}
						value={desc}
						onChange={(e) => setDesc(e.target.value)}
					></textarea>
				</div>
				<div className="d-flex gap-3">
					<button type="button" className="btn btn-success" onClick={renewPost}>
						Save
					</button>
					<button type="button" className="btn btn-danger" onClick={() => navigate("./../")}>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
}
