import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";

const Card = (props) => {
    return (
        <div>
            <div className="card d-inline-block m-2" style={{ width: "18rem" }}>
                <img src={props.image} className="card-img-top" alt={props.title} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <a href={props.link} className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
        </div>
    );
};

export default Card;
