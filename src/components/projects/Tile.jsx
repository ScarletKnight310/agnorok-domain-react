import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import './tile.css'

function Tile(data) {
  return (
    <div class="project-tile">
      <iframe class="tile-img"src={data.imgPath} width={400} height={300}></iframe>
      <div class="tile-body">
        <h5 class="tile-title">{data.title}</h5>
        <p class="tile-text">
          {data.desc}
        </p>
        <a href={data.link} class="tile-button"  target="_blank" rel="noopener noreferrer">{data.isImg ? "View Image" : "View Project"} <BiLinkExternal/></a>
      </div>
    </div>

  )
}

export default Tile