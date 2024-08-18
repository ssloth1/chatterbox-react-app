import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function LeftSideBar() {
    const navigate = useNavigate(); // Initialize the navigate function

    return (
        <div className="col-12 col-md-3 border border-1 ">
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
