import React from "react";


export default function Book({book}){
    const { title, img, year, genre, desc } = book;
    return <>
        <div className="card" style={{width: "18rem"}}>
            <img src={img} className="card-img-top" height="400px" alt={title}/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text"><small className="text-body-secondary">{year}</small></p>
                <p className="card-text">{genre}</p>
                <p className="card-text">{desc}</p>
            </div>
        </div>
    </>
}