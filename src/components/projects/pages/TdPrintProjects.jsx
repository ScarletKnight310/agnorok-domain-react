import React from 'react'
import './projPage.css'
import Tile from "../Tile";

import {FaRegSadCry} from 'react-icons/fa'
function TdPrintProjects() {
    return (
    <>
        <h1 class="page-header" id="thrD-page-header">&nbsp;[3D Printing + Modeling Projects]</h1>
        <p class="page-header-desc">Anything involving creating 3D images,
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
                    link=""
                    desc="1 to 1 replica of 'The Last Word' from the game Destiny. Fun to spin around."
                />
                </th>
                <th><Tile
                    title="Dice Holder + Deck Box Print"
                    imgPath="https://drive.google.com/file/d/1oGVZ1lbqTN_WwFKbU_2e7Mpu054ZBzYO/preview"
                    link=""
                    desc="Just as the title says"
                />
                </th>
                <th><Tile
                    title="Hunter Knife Print"
                    imgPath="https://drive.google.com/file/d/1pQj8X3QcOyafBxdjM4sL4D5zIQSPoyri/preview"
                    link=""
                    desc="1 to 1 replica of the Hunter's Knife from the game Destiny. Also fun to spin around."
                />
                </th>
            </tr>
            <tr>
                
            </tr>
        </table>
    </>
    )
}

export default TdPrintProjects