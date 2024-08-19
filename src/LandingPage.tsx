import { Link } from 'react-router-dom';
import { FaReact, FaNodeJs } from 'react-icons/fa';  // Import React and Node.js icons

export default function LandingPage() {
	const teamMembers = [
		{ name: "James Bebarski" },
		{ name: "Neil Israni" },
		{ name: "Mansi Negi" }
	];

	const repos = [
		{ name: "chatterbox-react-app", link: "https://github.com/ssloth1/chatterbox-react-app", icon: <FaReact /> },
		{ name: "chatterbox-node-server", link: "https://github.com/ssloth1/chatterbox-node-server", icon: <FaNodeJs /> }
	];

	return (
		<div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
			<div className="card shadow p-4" style={{ maxWidth: '600px' }}>
				<h1 className="mb-4">Chatterbox</h1>
				<p>Welcome to our project landing page!</p>

				<h2 className="mt-4">Team Members</h2>
				<ul className="list-unstyled">
					{teamMembers.map((member, index) => (
						<li key={index} className="mb-2">
							{member.name}
						</li>
					))}
				</ul>

				<h2 className="mt-4">Relevant Repositories</h2>
				<ul className="list-unstyled">
					{repos.map((repo, index) => (
						<li key={index} className="mb-2">
							<a href={repo.link} target="_blank" rel="noopener noreferrer" className="text-primary">
								{repo.icon} {repo.name}
							</a>
						</li>
					))}
				</ul>

				<Link to="/login" className="btn btn-success mt-4">
					Enter Chatterbox
				</Link>
			</div>
		</div>
	);
}
