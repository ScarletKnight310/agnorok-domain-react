import React from 'react';
import './projPage.css';

// Components
import Tile from "../Tile";

function ArtProjects() {
    return (
    <div class="project-page" id="art-project-page">
        <h1 class="page-header" id="art-page-header">&nbsp;[Art Projects]</h1>
        <p class="page-header-desc">
            Anything involving creating 2D images, mostly Adobe Photoshop
            and Illustrator. May add to this every so often so my Adobe skills
            don't get rusty.
        </p>

        <table class="project-tiles" id="art-proj-tiles">
            <tr>
                <th><Tile
                    title="Company Logo Project"
                    imgPath="https://drive.google.com/file/d/1xYGJa2CYhOpoWex81EoY6ctRE0zFka4K/preview"
                    link="https://drive.google.com/drive/u/1/folders/14lrcwUqs3PYp2awM7MikX_UWeGvG3YCe"
                    desc="Real Logo, Imaginary Company"
                />
                </th>
                <th><Tile
                    title="Mandalorian Revamp Project"
                    imgPath="https://drive.google.com/file/d/1GIAdraIHtBEFXPyjgf-P55Dp-z96zW8Q/preview"
                    link="https://drive.google.com/drive/u/1/folders/1iPf_23y77iNJ4GCJK4GqSvGgugq6LObf"
                    desc="Finished painting my Mandalorian helmet. Decided to do some art to refresh myself in Adobe Illustrator. 
                    I bought the lightsaber from Ultra Sabers and the Mando Helmet from Etsy, 
                    sadly the person I got it from doesn't seem to be selling anymore :("
                />
                </th>
                <th><Tile
                    title="Paint Reality Project"
                    imgPath="https://drive.google.com/file/d/1sd86-OepxsifZj7VxrQyelGOrTo99tY7/preview"
                    link="https://drive.google.com/drive/u/1/folders/1Lh6M4kmNsd1gAx05wVSpyA7S13GkEWLb"
                    desc="For a class I attempted to paint a bridge on my campus. Could have been better, 
                    but a cool experience nonetheless."
                />
                </th>
            </tr>
            <tr>
                <th><Tile
                    title="Photo Restoration and Colorization Project"
                    imgPath="https://drive.google.com/file/d/1kTrmQDJcJ-ULataMkas4ixz6VbwAma4x/preview"
                    link="https://drive.google.com/drive/u/1/folders/1Qjg_CrU8AoRTZ4oI2pbyp8lTLsAp2R6-"
                    desc="My first time using Photoshop, I restored a random picture I found online. 
                    It turned out pretty well in my opinion, sadly couldn't restore the necklace due to my inexperience."
                />
                </th>
                <th><Tile
                    title="Impossible Things Project"
                    imgPath="https://drive.google.com/file/d/19wrRE_HdrY3B9XCyUo5pePf3SlQxD6UZ/preview"
                    link="https://drive.google.com/drive/u/1/folders/1hvk6Sw3iUjUbi9Rnv84eTaR4VvycAciy"
                    desc="This is the image in the homepage. Probably one of my favorite projects, if it wasn't apparent enough. 
                    Hopefully in the future, this image becomes a reality."
                />
                </th>
            </tr>
        </table>
    </div>
    );
}

export default ArtProjects