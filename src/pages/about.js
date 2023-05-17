import React from "react";
import './about.css';

const About = () => {
    return (

        <section id="about">
        <div className="about-container">
            <h1>
                Education
                <link rel="stylesheet" href="/Users/wilsonmurphy/Desktop/webstormapps/src/pages/about.css" />
            </h1>
            <ul>
                <li>Clemson University</li>
                <li>B.S Computer Science, minor in Cyber Security</li>
            </ul>
            <h3>Skills</h3>
            <ul>
                <li>C++ and Java</li>
                <li>C and HTML</li>
                <li>Unix operating system and Emacs</li>
                <li>Problem-solving and analytical skills</li>
                <li>Interpersonal and communication skills</li>
                <li>Microsoft Office Products</li>
            </ul>
            <h3>Work Experience</h3>
            <ul>
                <li><strong>&#x2022;Server</strong>, Obie's By the Sea (May - August 2022)</li>
                <li><strong>&#x2022;Server/Cook</strong>, Meat and Seafood Co. (2016 - 2022)</li>
                <li><strong>&#x2022;Server/Cashier</strong>, Sweet Charlies ice cream (May - August 2021)</li>
            </ul>
            <h3>Coursework</h3>
            <ul>
                <li><strong>&#x2022;Intro to Programming in Java</strong></li>
                <li><strong>&#x2022;Programming Methodology</strong></li>
                <li><strong>&#x2022;Discrete Structures</strong></li>
                <li><strong>&#x2022;Algorithms and Data Structures (Spring 2023)</strong></li>
                <li><strong>&#x2022;Software Development Foundations (Spring 2023)</strong></li>
                <li><strong>&#x2022;Computing, Ethics & Society (Spring 2023)</strong></li>
            </ul>
            <h3>Hobbies</h3>
            <ul>
                <li>Surfing, Skiing, Art, Scuba Diving, Traveling, Coding</li>
            </ul>
        </div>
        </section>

    );
};

export default About;