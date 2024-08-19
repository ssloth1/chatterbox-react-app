import { Link } from "react-router-dom";
import { FaUserCircle, FaHome } from "react-icons/fa";
import "./index.css";

export default function Sidebar() {
	return (
		<div className="sidebar">
			<Link to="/home" className="btn btn-link mt-3 d-flex flex-column align-items-center">
				<FaHome className="mb-2" />
				<span>Home</span>
			</Link>

			<Link to="/profile" className="btn btn-link mt-3 d-flex flex-column align-items-center">
				<FaUserCircle className="mb-2" />
				<span>Profile</span>
			</Link>
		</div>
	);
}
