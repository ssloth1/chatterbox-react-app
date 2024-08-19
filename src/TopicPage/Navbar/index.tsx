import React, { useState, useEffect } from "react";

import { fetchAllTopics } from "../../TopicPage/client";

import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function NavBar({
	searchText,
	setSearchText,
	fetchPosts,
}: {
	searchText: any;
	setSearchText: any;
	fetchPosts: any;
}) {

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light ">
			<div className="container-fluid">
				<a className="navbar-brand mx-5">
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
							<a className="nav-link active" aria-current="page">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
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
									fetchPosts(searchText);
								}
							}}
							value={searchText}
							className="form-control me-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button className="btn btn-outline-success" onClick={()=>fetchPosts(searchText)}>Search</button>
					</div>
				</div>
			</div>
		</nav>
	);
}