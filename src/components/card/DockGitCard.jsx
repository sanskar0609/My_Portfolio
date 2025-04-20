import React from 'react';
import "./Dock.css";

function DockGitCard({ title, dockerImageName, dockerHubUrl, githubUrl }) {
  return (
    <div className="dock-card-container">
      <h1 className="dock-title">{title}</h1>
      <div className="dock-hovercard">
        <p className="dock-docker-image-name">{dockerImageName}</p>
      </div>
      <div className="dock-links">
        <a 
          href={dockerHubUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="dock-docker-link"
        >
          View on Docker Hub
        </a>
        <a 
          href={githubUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="dock-github-link"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}

export default DockGitCard;
