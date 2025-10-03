import React from "react";
import badge from '../../assets/certificates/image.png'

const GitHubStats = () => {
  const githubUsername = "sanskar0609"; // ✅ Replace with your GitHub username
  const leetcodeUsername = "sanskar_sontakke_0609"; // ✅ Replace with your LeetCode username
  const hackerrankUsername = "sanskarsontakke1"; // ✅ Replace with your HackerRank username

  return (
    <section
      id="stats"
      className="w-full min-h-screen flex flex-col items-center justify-center p-6 text-white"
    >
      {/* Title */}
      <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
        My Developer Profiles 🚀
      </h2>

      {/* 🔹 3-Column Layout */}
      <div className="w-full grid md:grid-cols-3 gap-10 place-items-center">
        {/* 🧑‍💻 GitHub Column */}
        <div className="flex flex-col items-center gap-6 text-center">
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
            GitHub Stats
          </h3>

          {/* Profile Stats */}
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=tokyonight&border_radius=15`}
            alt="GitHub Stats"
            className="rounded-2xl w-80 shadow-[0_0_20px_rgb(66,173,205,0.6)] hover:scale-105 transition-transform duration-300"
          />

          {/* Streak Stats */}
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=tokyonight&border_radius=15`}
            alt="GitHub Streak"
            className="rounded-2xl w-80 shadow-[0_0_20px_rgb(66,173,205,0.6)] hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* 🧠 LeetCode Column */}
        <div className="flex flex-col items-center gap-6 text-center">
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
            LeetCode Stats
          </h3>

          <img
            src={`https://leetcard.jacoblin.cool/${leetcodeUsername}?theme=dark&font=Karma&ext=heatmap&hide=rank,username`}
            alt="LeetCode Stats"
            className="w-80 max-w-md rounded-2xl shadow-[0_0_20px_rgb(255,204,0,0.6)] hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* 🏅 HackerRank Column */}
        <div className="flex flex-col items-center gap-6 text-center">
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-green-400 to-white bg-clip-text text-transparent mb-[40px]">
            HackerRank Badges
          </h3>

          {/* Example Badge Images */}
          <div className="flex flex-col gap-4 items-center mt-20px">
            <img
              src={badge}
               alt="SQL Intermediate Badge"
              className="w-80 rounded-xl shadow-[0_0_20px_rgb(16,185,129,0.6)] hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* 🔗 Visit Button */}
          <a
            href={`https://www.hackerrank.com/profile/${hackerrankUsername}`}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block px-6 py-2 rounded-full border-2 border-green-400 text-green-400 font-semibold hover:bg-green-400 hover:text-black transition-colors duration-300"
          >
            Visit My HackerRank
          </a>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
