import { useNavigate } from 'react-router-dom';

export default function NavBar({
	searchText,
	setSearchText,
	displayAllTopics,
}: {
	searchText: any;
	setSearchText: any;
	displayAllTopics: any;
}) {
	const navigate = useNavigate();  // Initialize the useNavigate hook

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light ">
			<div className="container-fluid">
				<a className="navbar-brand mx-5" onClick={() => { displayAllTopics(''); navigate('./') }}>
					ChatterBox
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" onClick={() => { displayAllTopics(''); navigate('./') }}>
								Home
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link"
								onClick={() => navigate('/profile')}  // Navigate to ProfilePage
							>
								Profile
							</a>
						</li>
					</ul>
					<div className="d-flex">
						<input
							onChange={(e) => {
								setSearchText(e.target.value);
							}}
							onKeyUp={(e) => {
								if (e.key === "Enter") {
									displayAllTopics(searchText);
								}
							}}
							value={searchText}
							className="form-control me-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button className="btn btn-outline-success" onClick={() => { displayAllTopics(searchText) }}>
							Search
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
}
