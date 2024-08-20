import { useNavigate } from 'react-router-dom';

export default function LeftSideBar() {
	const navigate = useNavigate();

	return (
		<div className="col-12 col-md-1 border border-1 ">
			<button
				type="button"
				className="btn btn-success w-50 m-5"
				onClick={() => navigate('./CreatePost')}
			>
				Create Post
			</button>
		</div>
	);
}