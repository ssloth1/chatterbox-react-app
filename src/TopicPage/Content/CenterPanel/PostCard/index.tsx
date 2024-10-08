import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import DeleteModal from "../DeleteModal";
import { selectCurrentUser } from "../../../../Account/reducer";

export default function PostCard({ post, fetchPosts }: { post: any, fetchPosts: any }) {
	const navigate = useNavigate();
	const [isModalOpen, setModalOpen] = useState(false);
	const userInfo = useSelector(selectCurrentUser);

	const isMod = userInfo.role === 'MODERATOR' || userInfo._id === post.creator;

	return (
		<div className="card w-100 border border-2 mt-3">
			<div className="card-body">
				<h5 className="card-title">{post.postTitle}</h5>
				<p className="card-text">{post.postDesc}</p>
				<button type="button" className="btn btn-success mx-2" onClick={() => {
					navigate(`/${post._id}`);
				}} >
					Go
				</button>
				{isMod && (
					<>
						<button type="button" className="btn btn-warning mx-1" onClick={() => {
							navigate(`./../EditPost/${post._id}`);
						}} >
							Edit
						</button>
						<button type="button" className="btn btn-danger mx-2" onClick={() => setModalOpen(true)}>
							Delete
						</button>
					</>
				)}
			</div>
			<DeleteModal fetchPosts={fetchPosts} postId={post._id} isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
		</div>
	);
}