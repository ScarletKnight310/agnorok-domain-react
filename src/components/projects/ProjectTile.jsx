import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectTile(data) {
  return (
    <Card className="project-title">
      <Card.Img variant="top" src={data.imgPath} alt="tile-img" />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {data.desc}
        </Card.Text>
        <Button variant="primary" href={data.link} target="_blank">
          <BiLinkExternal /> &nbsp;
          {data.isPureImg ? "View Image" : "View Project"}
        </Button>
      </Card.Body>
    </Card>
  )
}

export default ProjectTile