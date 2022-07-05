import React from 'react';
import './projPage.css';

// Components
import Tile from "../Tile";

// Images
import {FaRegSadCry} from 'react-icons/fa';

function TdPrintProjects() {
    return (
    <div class="project-page" id="tdpm-project-page">
        <h1 class="page-header" id="thrD-page-header">&nbsp;[3D Printing + Modeling Projects]</h1>
        <p class="page-header-desc">
            Anything involving creating 3D images,
            mostly Cura for splicing and Blender for editing/creating.
            Majority of the projects I print come from existing models from Thingiverse.
            I use an Ender-3 for printing, but I plan to upgrade soon.
        <br/>
        <div id ="tdpm-notes">
            Currently my 3D Printer is out of commission,
            won't be seeing new prints for a while <FaRegSadCry/>
        </div></p>
        
        <table class="project-tiles" id="art-proj-tiles">
            <tr>
                <th><Tile
                    title="The Last Word Print"
                    imgPath="https://drive.google.com/file/d/1U3uMbhqndyO_UjwN_1MfsL-33rk4T5vD/preview"
                    link="https://drive.google.com/drive/folders/1JrrnqXqNJ3ypqpZ5w1ibook_muEhWDzH?usp=sharing"
                    desc="1 to 1 replica of 'The Last Word' from the game Destiny. Fun to spin around."
                /></th>
                <th><Tile
                    title="Dice Holder + Deck Box Print"
                    imgPath="https://drive.google.com/file/d/1oGVZ1lbqTN_WwFKbU_2e7Mpu054ZBzYO/preview"
                    link="https://drive.google.com/drive/folders/1Qcwcpga12yW6-ekeF6oummjC0q_FJNLU?usp=sharing"
                    desc="Just as the title says"
                /></th>
                <th><Tile
                    title="Hunter Knife Print"
                    imgPath="https://drive.google.com/file/d/1pQj8X3QcOyafBxdjM4sL4D5zIQSPoyri/preview"
                    link="https://drive.google.com/drive/folders/10OJU2x11cHElRiM8rcn_qXO03etH4TbX?usp=sharing"
                    desc="1 to 1 replica of the Hunter's Knife from the game Destiny. Also fun to spin around."
                />
                </th>
            </tr>
            <tr>
                <th><Tile
                    title="Sword Model"
                    imgPath="https://drive.google.com/file/d/1vIFEOvr43FzWF_p6N7-XfYbSukvmZWVr/preview"
                    link="https://drive.google.com/drive/folders/1I5Om9cCQxdYzc_UmWwHmMP55UBq5wWAt?usp=sharing"
                    desc="Made this while following a blender tutorial, I now have a basic grasp of blender and it's tools"
                /></th>
            </tr>
        </table>
    </div>
    );
}

export default TdPrintProjects