import React, { useState } from "react";
import Book from "./Book";
import Books from "./shakespeareBibliography";

export default function ShakespeareMain(){
    const [element, setElement] = useState(<></>);

    const showElem = (elem) => {
        setElement(<Book book={elem}></Book>)
    }

    return <div className="d-flex justify-content-around align-items-start mt-3">
            <div className="d-flex flex-column justify-content-center align-items-center">
                    <h1>William Shakespeare</h1>
                    <img src="https://nationaltoday.com/wp-content/uploads/2022/04/50-William-Shakespeare-1200x834.jpg"
                        alt="Shakespeare"
                        height="300px"/>
                    <div className="card mt-3" style={{width: "18rem"}}>
                        <div className="card-header">
                            <h4>Books</h4>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><p style={{cursor: "pointer"}} onClick={() => showElem(Books[0])} className="m-0">{Books[0].title}</p></li>
                            <li className="list-group-item"><p style={{cursor: "pointer"}} onClick={() => showElem(Books[1])} className="m-0">{Books[1].title}</p></li>
                            <li className="list-group-item"><p style={{cursor: "pointer"}} onClick={() => showElem(Books[2])} className="m-0">{Books[2].title}</p></li>
                            <li className="list-group-item"><p style={{cursor: "pointer"}} onClick={() => showElem(Books[3])} className="m-0">{Books[3].title}</p></li>
                        </ul>
                    </div>
            </div>

            {element}
    </div>
}