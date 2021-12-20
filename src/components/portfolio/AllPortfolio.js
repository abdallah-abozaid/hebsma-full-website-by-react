import React, { useState, useEffect, useContext } from "react";
import "./portfolio.css";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";
import { BsBoxArrowInRight } from "react-icons/bs";
import Mycontext from "../../store/context";

const Portfolio = () => {
  const ctx = useContext(Mycontext);
  const [filter, setfilter] = useState([]);
  const [active, setactive] = useState("all");
  useEffect(() => {
    setfilter(ctx.items);
  }, []);

  const filterhandler = (filter) => {
    if (filter == "all") {
      setfilter(ctx.items);
    } else {
      const old = [...ctx.items];
      const update = old.filter((item) => {
        return item.filter == filter;
      });
      setfilter(update);
    }
  };
  return (
    <div className="portfolio">
      <div className="container">
        <div className="elements">
          <div className="buttons">
            <button
              className={active == "all" ? "active" : ""}
              onClick={(e) => {
                filterhandler("all");
                setactive("all");
              }}
            >
              all
            </button>
            <button
              className={active == "web" ? "active" : ""}
              onClick={() => {
                filterhandler("web");
                setactive("web");
              }}
            >
              web site
            </button>
            <button
              className={active == "mobile" ? "active" : ""}
              onClick={() => {
                filterhandler("mobile");
                setactive("mobile");
              }}
            >
              mobile app
            </button>
            <button
              className={active == "vedio" ? "active" : ""}
              onClick={() => {
                filterhandler("vedio");
                setactive("vedio");
              }}
            >
              motion video
            </button>
            <button
              className={active == "identity" ? "active" : ""}
              onClick={() => {
                filterhandler("identity");
                setactive("identity");
              }}
            >
              visual identity
            </button>
          </div>
          <div className="tiems">
            <Row xs={1} sm={2} md={3} className="g-4">
              {filter.length > 0 &&
                filter.map((item) => (
                  <Col key={item.id}>
                    <Card className="item">
                      <img src={item.img} />
                      <div className="outer">
                        <div>
                          <h4>{item.title}</h4>
                          <Link
                            to={`/portfolio/${item.id}`}
                            onClick={() => {
                              ctx.setback(false);
                            }}
                          >
                            read more <BsBoxArrowInRight size={"20px"} />
                          </Link>
                        </div>
                      </div>
                    </Card>
                  </Col>
                ))}
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
