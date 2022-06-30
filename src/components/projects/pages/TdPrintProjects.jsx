import React from 'react'
import './projPage.css'
import Tile from "../Tile";

function TdPrintProjects() {
    return (
    <>
        <h1 class="page-header" id="thrD-page-header">&nbsp;[3D Printing + Modeling Projects]</h1>
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
            </tr>
        </table>
    </>
    )
}

export default TdPrintProjects