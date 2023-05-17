
import React from 'react';
import './projects.css';
import logo from './logo.png';

const Projects = () => {
    const githubUrls = [
        'https://github.com/your-username/project1',
        'https://github.com/your-username/project2',
        'https://github.com/your-username/project3',
        'https://github.com/your-username/project2',
        'https://github.com/your-username/project3'
    ];

    return (
        <div className="container">
            <div className="text-container">
                <h2>Connect X (Java Swing)</h2>
                <p className="text"></p>
                <a className="button" href={githubUrls[0]} target="_blank" rel="noopener noreferrer">
                    View on GitHub
                </a>
            </div>
            <div className="image-container">
                <img className="image" src= "projectpic.png" alt="logo"/>
            </div>
            <div className="text-container">
                <h2>Wordl Solver (C++)</h2>
                <p className="text"></p>
                <a className="button" href={githubUrls[1]} target="_blank" rel="noopener noreferrer">
                    View on GitHub
                </a>
            </div>
            <div className="image-container">
                <img className="image" src="wordl.png" alt="Project 2" />
            </div>
            <div className="text-container">
                <h2>Free Roam 2D Game Engine (C++, Lua, SDL2, Dear imGui, glm)</h2>
                <p className="text"></p>
                <a className="button" href={githubUrls[2]} target="_blank" rel="noopener noreferrer">
                    View on GitHub
                </a>
            </div>
            <div className="image-container">
                <img className="image" src="" alt="Project 3" />
            </div>
            <div className="text-container">
                <h2>Todo List (Golang)</h2>
                <p className="text">.</p>
                <a className="button" href={githubUrls[3]} target="_blank" rel="noopener noreferrer">
                    View on GitHub
                </a>
            </div>
            <div className="image-container">
                <img className="image" src="" alt="Project 3" />
            </div>
        </div>
    );
};

export default Projects;