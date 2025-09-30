import React from 'react';

export default function UnifiedCard({ title, imageUrl, liveUrl, githubUrl, dockerHubUrl }) {
  return (
    <div className="flex items-center justify-center p-2">
      <div className="relative w-72 h-64 sm:w-80 sm:h-72 md:w-120 md:h-96 rounded-2xl overflow-hidden shadow-2xl group">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          {/* Gradient overlay for text */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/80"></div>
        </div>

        {/* Links and Title */}
        <div className="absolute bottom-0 left-0 right-0 h-[35%] flex flex-col justify-center items-center p-4 space-y-2 bg-gray-800/40 backdrop-blur-md">
          <h2
            className="text-gradient font-bold text-base sm:text-lg md:text-xl text-center bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(to right, #42adcd, #ffffff)' }}
          >
            {title}
          </h2>
          <div className="flex flex-col gap-2 w-full">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700/30 text-white px-4 py-2 rounded-lg text-center font-medium hover:bg-cyan-500/40 transition"
              >
                Live Demo
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700/30 text-white px-4 py-2 rounded-lg text-center font-medium hover:bg-cyan-500/40 transition"
              >
                GitHub
              </a>
            )}
            {dockerHubUrl && (
              <a
                href={dockerHubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700/30 text-white px-4 py-2 rounded-lg text-center font-medium hover:bg-cyan-500/40 transition"
              >
                Docker Hub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
