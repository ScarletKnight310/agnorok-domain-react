import React from 'react'
import './projPage.css'

// Components
import Tile from "../Tile";

function CodingProjects() {
    return (
    <div class="project-page" id="code-project-page">
        <h1 class="page-header" id="code-page-header">&nbsp;[Coding Projects]</h1>
        <p class="page-header-desc">
            If it involves me coding, it goes here. Content varies between 
            Unity games, Arduino Code, and more. Most of my projects 
            can be found on <a class="in-text" href="https://github.com/ScarletKnight310" target="_blank" rel="noopener noreferrer">GitHub</a> or my <a class="in-text" href="https://scarletknight310.itch.io/" target="_blank" rel="noopener noreferrer">itch.io</a> account.
        </p>
        
        <table class="project-tiles" id="code-proj-tiles">
            <tr>
                <th><Tile
                    title="3D Graphics Project" 
                    imgPath="https://drive.google.com/file/d/1l1nUZsHiB-Lm9odtMEiaZ0_ZhgFPKMiE/preview"
                    desc="Built with Python, JavaScript, HTML, and CSS a program that uses a generic web camera to process American Sign Language 
                    (ASL) then translates the processed information into American English with Deep Learning algorithms. 
                    Can process both dynamic and static hand gestures."
                    link="https://github.com/ScarletKnight310/3D-GSAlpha"
                /></th>
                <th><Tile 
                    title="ASL Translator Project"
                    imgPath="https://drive.google.com/file/d/1jXoK-HQmOPXLeyWvg8likYRyYkSUl9T_/preview"
                    desc="A program that utilizes line drawing algorithms and Multi-variable Calculus to render and manipulate three-dimensional 
                    shapes. All graphics and rendering functions for this were made from scratch, not including the GUI which was made with JavaFX."
                    link="https://github.com/ScarletKnight310/ASL-Translator-Project"
                /></th>
                <th><Tile
                    title="Auto Health Check Project" 
                    imgPath="https://drive.google.com/file/d/1qs2iL0Mcg-8onEKnY7YWr91Lf1110yaH/preview"
                    desc="It's just as the title says, automatically fills out California Lutheran University's Daily Health Check Form 
                    when the AutoHealthCheck.bat file is ran. With extra setup this program can run itself with the use of the 
                    Windows Task Scheduler..."
                    link="https://github.com/ScarletKnight310/AutoHealthCheck "
                /></th>
            </tr>
            <tr>
                <th><Tile 
                    title="Generic Client Server Architecture"
                    imgPath="https://drive.google.com/file/d/1t8RrYwddONHcdyzjRF57Q20fvD-gmmxF/preview"
                    desc="Built with Java and SQL, Designed and Programmed a generic client/server architecture that includes the ability to store 
                    information in a database and generate emails"
                    link="https://github.com/ScarletKnight310/ClientServer-Project-Public_v1.0"
                /></th>
                <th><Tile 
                    title="Media Randomizer"
                    imgPath="https://drive.google.com/file/d/1aDHQC5MDsberGKMrFKtxwly2vWfqlF6b/preview"
                    desc="A program where you can select an entertainment type (Manga, Anime, Games, Movies, etc.) run the program, 
                    then receive information on a random title in the specified entertainment type."
                    link="https://github.com/ScarletKnight310/Media-Randomizer"
                /></th>
                <th><Tile 
                    title="Project Shiro-0"
                    imgPath="https://drive.google.com/file/d/1l_mDBWBJ8CoOon_VDmJMbT82aeNhpaJo/preview"
                    desc="My journey in learning Robotics and using Arduino. Mostly a log of my progress in trying different sensors. 
                    Overall, its kinda interesting but it's mostly me learning how to use Arduino and doing part analysis."
                    link="https://github.com/ScarletKnight310/"
                /></th>
            </tr>
            <tr>
                <th><Tile 
                    title="Simple Encryption Project"
                    imgPath="https://drive.google.com/file/d/1ZJ3Kyv0E2YMyekq5ZlCnypNFnrrt1gp7/preview"
                    desc="After taking Data Communication and Networks class, I became more concern about how easy it is to get personal info 
                    on the web and through other wireless features. It's super simple and shouldn't be used to encrypt stuff for privacy, 
                    but it works!"
                    link="https://github.com/ScarletKnight310/Simple-Encryption"
                /></th>
                <th><Tile 
                    title="JS Drawing App"
                    imgPath="https://drive.google.com/file/d/1A6zwYKedykzvpYfo6e1zY_8Vqs4Gre_1/preview"
                    desc="A basic drawing app based on Shuvo's Code, with some added functionality. Made to practice my CSS, HTML, and JavaScript. 
                    Plan to add more when I can. More info can be found on the repository"
                    link="https://github.com/ScarletKnight310/JS-DrawingApp"
                /></th>
                <th><Tile
                    title="Agnorok Domain React"
                    imgPath="https://drive.google.com/file/d/1hk6oNdwbH-9oHp2XBREMq367bYfv7BYc/preview"
                    desc="Built with HTML, CSS, JavaScript, and the React library. I'm currently remaking my portfolio website with React. 
                    Yes, you are currently using the mentioned website. LINK LOOP INBOUND!"
                    link="https://github.com/ScarletKnight310/agnorok-domain-react"
                /></th>
            </tr>
        </table>
    </div>
    );
}

export default CodingProjects