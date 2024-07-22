import React, { useState } from "react";
import CountShower from "./IncreaseShower";

export default function CountButton(){
    const [count, setCount] = useState(0);
    const increase = (value) => {
        setCount(count+value);
    }
    return <>
        <button type="button" className="btn btn-primary mt-3 mx-2" onClick={() => increase(10)}>+10</button>
        <button type="button" className="btn btn-primary mt-3 mx-2" onClick={() => increase(-100)}>-100</button>
        <button type="button" className="btn btn-primary mt-3 mx-2" onClick={() => increase(25)}>25</button>
        <CountShower data = {count}/>
    </>

}