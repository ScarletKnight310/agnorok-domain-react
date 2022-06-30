import React from 'react'
import './projPage.css'
import Tile from "../Tile";

function ArtProjects() {
    return (
    <>
        <h1 class="page-header" id="art-page-header">&nbsp;[Art Projects]</h1>
        <table class="project-tiles" id="art-proj-tiles">
            <tr>
                <th><Tile
                    title="Company Logo Project"
                    imgPath="https://drive.google.com/file/d/1xYGJa2CYhOpoWex81EoY6ctRE0zFka4K/preview"
                    link=""
                    desc="Real Logo, Imaginary Company"
                />
                </th>
                <th><Tile
                    title="Mandalorian Revamp Project"
                    imgPath="https://drive.google.com/file/d/1GIAdraIHtBEFXPyjgf-P55Dp-z96zW8Q/preview"
                    link=""
                    desc="Finished painting my Mandalorian helmet. Decided to do some art to refresh myself in Adobe Illustrator. 
                    I bought the lightsaber from Ultra Sabers and the Mando Helmet from Etsy, 
                    sadly the person I got it from doesn't seem to be selling anymore :("
                />
                </th>
                <th><Tile
                    title="Paint Reality Project"
                    imgPath="https://drive.google.com/file/d/1sd86-OepxsifZj7VxrQyelGOrTo99tY7/preview"
                    link=""
                    desc="For a class I attempted to paint a bridge on my campus. Could have been better, 
                    but a cool experience nonetheless."
                />
                </th>
            </tr>
            <tr>
                <th><Tile
                    title="Photo Restoration and Colorization Project"
                    imgPath="https://drive.google.com/file/d/1kTrmQDJcJ-ULataMkas4ixz6VbwAma4x/preview"
                    link=""
                    desc="My first time using Photoshop, I restored a random picture I found online. 
                    It turned out pretty well in my opinion, sadly couldn't restore the necklace due to my inexperience."
                />
                </th>
                <th><Tile
                    title="Impossible Things Project"
                    imgPath="https://drive.google.com/file/d/19wrRE_HdrY3B9XCyUo5pePf3SlQxD6UZ/preview"
                    link=""
                    desc="This is the image in the homepage. Probably one of my favorite projects, if it wasn't apparent enough. 
                    Hopefully in the future, this image becomes a reality."
                />
                </th>
            </tr>
        </table>
    </>
    )
}

export default ArtProjects