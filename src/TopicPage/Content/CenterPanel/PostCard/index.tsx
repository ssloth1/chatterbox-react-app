import { useState } from "react";
import DeleteModal from "../DeleteModal";
import { useNavigate } from "react-router-dom";
import "./index.css";

export default function PostCard({
	post,
	fetchPosts,
}: {
	post: any;
	fetchPosts: any;
}) {
	const navigate = useNavigate();
	const [isModalOpen, setModalOpen] = useState(false);

	return (
		<div className="post-card">
			<div className="post-card-body">
				<h5 className="post-card-title">{post.postTitle}</h5>
				<p className="post-card-text">{post.postDesc}</p>
				<div className="card-buttons">
					<button
						type="button"
						className="card-btn card-btn-go"
						onClick={() => {
							navigate(`/${post._id}`);
						}}
					>
						Go
					</button>
					<button
						type="button"
						className="card-btn card-btn-edit"
						onClick={() => {
							navigate(`./../EditPost/${post._id}`);
						}}
					>
						Edit
					</button>
					<button
						type="button"
						className="card-btn card-btn-delete"
						onClick={() => setModalOpen(true)}
					>
						Delete
					</button>
				</div>
			</div>
			<DeleteModal
				fetchPosts={fetchPosts}
				postId={post._id}
				isOpen={isModalOpen}
				onClose={() => setModalOpen(false)}
			/>
		</div>
	);
}
