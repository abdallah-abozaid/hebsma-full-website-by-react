import React, { useContext, useState } from "react";
import Mycontext from "../../store/context";
import { Row, Col, Card } from "react-bootstrap";
import "./allnotes.css";
import { Link } from "react-router-dom";

const AllNotes = () => {
  const [Index, setIndex] = useState(0);
  const ctx = useContext(Mycontext);
  const items = ctx.notes;
  const page = 6;
  const numpage = Math.ceil(items.length / page);
  const groupitems = Array.from({ length: numpage }, (x, index) => {
    const start = index * page;
    return items.slice(start, start + page);
  });
  return (
    <div className="allnotes container my-5">
      <Row xs={1} md={2} className="g-5">
        {groupitems[Index].map((item) => (
          <Col key={item.id}>
            <Card>
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <div className="content">
                  <Card.Title>{item.title}</Card.Title>
                  <Link to={`/notes/${item.id}`}>Subsecripe Now</Link>
                </div>
                <Card.Text>{item.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <ul>
        {groupitems.map((item, index) => (
          <li
            className={Index == index ? "active" : ""}
            key={index}
            onClick={() => {
              setIndex(index);
            }}
          >
            {index + 1}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllNotes;
