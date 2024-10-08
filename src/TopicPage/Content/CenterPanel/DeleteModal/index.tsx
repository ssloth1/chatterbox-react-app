
import { useParams } from "react-router";
import { deletePost } from "../../../../PostPage/client";

export default function DeleteModal({
	fetchPosts,
	isOpen,
	onClose,
	postId,
}: {
	fetchPosts: any;
	isOpen: boolean;
	onClose: any;
	postId: any
}) {
	const { tid } = useParams();
	if (!isOpen) return null;
	const removePost = () => {
		deletePost(postId)
	}
	return (
		<div
			className="modal show"
			style={{ display: "block" }}
			tabIndex={-1}
			role="dialog"
		>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Delete Post?</h5>
					</div>
					<div className="modal-body">
						<p>Are you sure you want to delete this post?</p>
					</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-secondary"
							data-dismiss="modal"
							onClick={onClose}
						>
							Close
						</button>
						<button
							type="button"
							className="btn btn-danger"
							onClick={() => {
								removePost();
								fetchPosts(tid);
								onClose();
							}}
						>
							Delete
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
