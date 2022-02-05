import React, { Component } from "react";

function Card(props) {
  return (
    <>
      <div className="card">
        <img
          src={props.images}
          style={{ height: "170px" }}
          className="card-img-top image-fluid"
          alt="..."
        />
        <div className="card-body bg-light">
          <p className="card-text bg-light">A Netflix Original Series</p>
          <h5 className="card-title bg-light"> {props.title}</h5>
          <a href={props.link} target="_blank" className="btn">
            Watch Now
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
